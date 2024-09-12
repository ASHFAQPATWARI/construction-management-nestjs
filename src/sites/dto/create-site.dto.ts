import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSiteDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}
