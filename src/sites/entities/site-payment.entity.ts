import { ApiProperty, PickType } from '@nestjs/swagger';
import { $Enums, SitePayment } from '@prisma/client';

export class SitePaymentEntity implements SitePayment {
  id: string;
  amount: number;
  createdAt: Date;

  @ApiProperty({ name: 'paymentMethod', enum: $Enums.EPaymentMethod })
  paymentMethod: $Enums.EPaymentMethod;
  remarks: string;
  siteId: number;
}

export class SitePaymentTotal extends PickType(SitePaymentEntity, [
  'amount',
] as const) {}
