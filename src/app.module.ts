import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [UsersModule, QuestionsModule, AnswersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
