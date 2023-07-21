import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as morgan from 'morgan';
import { DatabaseModule } from './database/database.module';
import { createTreblleMiddleware } from './middlewares/treblle.middleware';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { BooksModule } from './books/books.module';

@Module({
  imports: [DatabaseModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const customFormat =
      ':remote-addr - :remote-user [:date[iso]] ":method :url" :status :res[content-length] - :response-time ms :user-agent';
    consumer
      .apply(LoggerMiddleware, morgan(customFormat), createTreblleMiddleware())
      .forRoutes('*');
  }
}
