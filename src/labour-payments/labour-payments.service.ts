import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateLabourPaymentDto } from './dto/create-labour-payment.dto';
import { UpdateLabourPaymentDto } from './dto/update-labour-payment.dto';

@Injectable()
export class LabourPaymentsService {
  constructor(private prisma: PrismaService) {}

  create(createLabourPaymentDto: CreateLabourPaymentDto) {
    console.log('object for sitepayment', createLabourPaymentDto);
    return this.prisma.labourPayment.create({ data: createLabourPaymentDto });
  }

  findAll() {
    return `This action returns all labourPayments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labourPayment`;
  }

  update(id: number, updateLabourPaymentDto: UpdateLabourPaymentDto) {
    return this.prisma.labourPayment.update({
      data: updateLabourPaymentDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.labourPayment.delete({ where: { id: id } });
  }

  findLabourPaymentsBySiteId(siteId: number) {
    return this.prisma.labourPayment.findMany({
      where: {
        siteId,
      },
      include: {
        labourPaymentItems: true,
      },
    });
  }

  async findTotalLabourPaymentBySiteId(id: number) {
    const aggregate = await this.prisma.labourPayment.aggregate({
      _sum: {
        amount: true,
      },
      where: { siteId: id },
    });
    return aggregate._sum;
  }
}
