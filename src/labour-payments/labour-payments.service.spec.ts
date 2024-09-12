import { Test, TestingModule } from '@nestjs/testing';
import { LabourPaymentsService } from './labour-payments.service';

describe('LabourPaymentsService', () => {
  let service: LabourPaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabourPaymentsService],
    }).compile();

    service = module.get<LabourPaymentsService>(LabourPaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
