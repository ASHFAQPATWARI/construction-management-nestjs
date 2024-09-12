import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  Allow,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  MaxLength,
  ValidateNested,
} from 'class-validator';

class CreateLabourPaymentItemDto
  implements Prisma.LabourPaymentItemCreateWithoutLabourPaymentInput
{
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsPositive()
  @IsNotEmpty()
  amount: number;
}

class ConnectLabourPaymentItemDto
  extends CreateLabourPaymentItemDto
  implements Prisma.LabourPaymentItemUncheckedUpdateInput
{
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  labourPaymentId: number;
}

class CreateLabourPaymentCreateLabourPaymentItemRelationDto {
  @Allow()
  @ValidateNested({ each: true })
  @Type(() => CreateLabourPaymentItemDto)
  create?: CreateLabourPaymentItemDto[];

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => ConnectLabourPaymentItemDto)
  connect?: ConnectLabourPaymentItemDto[];
}

export class CreateLabourPaymentDto {
  @IsNumber()
  @IsNotEmpty()
  siteId: number;

  @IsOptional()
  @IsDateString()
  date?: Date;

  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => CreateLabourPaymentCreateLabourPaymentItemRelationDto)
  labourPaymentItems?: CreateLabourPaymentCreateLabourPaymentItemRelationDto;
}
