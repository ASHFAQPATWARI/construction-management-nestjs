import { PartialType } from '@nestjs/swagger';
import { CreateLabourPaymentDto } from './create-labour-payment.dto';

export class UpdateLabourPaymentDto extends PartialType(CreateLabourPaymentDto) {}
