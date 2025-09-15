import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Module({
  providers: [QuestionsService],
  exports: [QuestionsService]
})
export class QuestionsModule {}
