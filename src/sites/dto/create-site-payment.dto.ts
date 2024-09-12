import { ApiProperty } from '@nestjs/swagger';
import { EPaymentMethod } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
  ValidateIf,
} from 'class-validator';

export class CreateSitePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ValidateIf((o, value) => value)
  @IsDate()
  createdAt: Date;

  @IsNotEmpty()
  @IsEnum(EPaymentMethod)
  @ApiProperty({
    description: 'Available payment methods',
    enum: EPaymentMethod,
  })
  paymentMethod: EPaymentMethod;

  @IsOptional()
  @MaxLength(200)
  remarks?: string;

  @IsNotEmpty()
  @IsNumber()
  siteId: number;
}
