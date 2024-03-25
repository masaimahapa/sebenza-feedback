import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    FeedbackModule,
    UserModule,
  ConfigModule.forRoot({
    isGlobal: true,
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
