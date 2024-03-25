import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FeedbackModule,
  ConfigModule.forRoot({
    isGlobal: true,
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
