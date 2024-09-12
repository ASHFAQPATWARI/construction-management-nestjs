import { Module } from '@nestjs/common';
import { LabourPaymentsService } from './labour-payments.service';
import { LabourPaymentsController } from './labour-payments.controller';

@Module({
  controllers: [LabourPaymentsController],
  providers: [LabourPaymentsService],
})
export class LabourPaymentsModule {}
