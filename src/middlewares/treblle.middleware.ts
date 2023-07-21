// middleware/treblle.middleware.ts
import * as express from 'express';
import * as treblle from '@treblle/express';

export function createTreblleMiddleware(): express.RequestHandler {
  try {
    const treblleMiddleware = treblle({
      apiKey: process.env.TREBLLE_API_KEY,
      projectId: process.env.TREBLLE_PROJECT_ID,
      additionalFieldsToMask: [],
    });

    console.log('Monitoring successfully set up');

    return treblleMiddleware;
  } catch (error) {
    console.error('Error setting up Treblle middleware:', error);
  }
}
