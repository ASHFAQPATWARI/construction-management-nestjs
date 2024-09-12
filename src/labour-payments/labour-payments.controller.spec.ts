import { Test, TestingModule } from '@nestjs/testing';
import { LabourPaymentsController } from './labour-payments.controller';
import { LabourPaymentsService } from './labour-payments.service';

describe('LabourPaymentsController', () => {
  let controller: LabourPaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LabourPaymentsController],
      providers: [LabourPaymentsService],
    }).compile();

    controller = module.get<LabourPaymentsController>(LabourPaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
