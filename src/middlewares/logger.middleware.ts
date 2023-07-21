// src/middlewares/logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, url, headers } = req;
    const userAgent = headers['user-agent'];

    console.log(`Request received from - IP: ${ip}:`);
    console.log(`- User-Agent: ${userAgent}`);
    console.log(`- Method: ${method}`);
    console.log(`- URL: ${url}`);

    next();
  }
}
