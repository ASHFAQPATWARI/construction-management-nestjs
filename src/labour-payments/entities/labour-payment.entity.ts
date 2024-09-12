import { ApiProperty, PickType } from '@nestjs/swagger';
import {
  LabourPaymentItem,
  LabourPayment as TLabourPayment,
} from '@prisma/client';

export class LabourPaymentEntity implements TLabourPayment {
  id: number;
  siteId: number;
  date: Date;
  amount: number;
}

export class LabourPaymentEntityWithPaymentItems extends LabourPaymentEntity {
  @ApiProperty({ isArray: true })
  labourPaymentItems: LabourPaymentItem[];
}

export class LabourPaymentTotal extends PickType(LabourPaymentEntity, [
  'amount',
] as const) {}
