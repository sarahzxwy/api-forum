import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';

@Module({
  providers: [AnswersService],
  exports: [AnswersService]
})
export class AnswersModule {}
