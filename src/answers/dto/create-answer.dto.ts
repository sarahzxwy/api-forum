import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateAnswerDto {
  @Length(3)
  @IsString()
  @IsNotEmpty()
  body: string;
}
