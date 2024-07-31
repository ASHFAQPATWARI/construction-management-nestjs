import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateSitePaymentDto } from './dto/create-site-payment.dto';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Injectable()
export class SitesService {
  constructor(private prisma: PrismaService) {}

  create(createSiteDto: CreateSiteDto) {
    return this.prisma.site.create({ data: createSiteDto });
  }

  findAll() {
    return this.prisma.site.findMany();
  }

  findOne(id: number) {
    return this.prisma.site.findUnique({ where: { id } });
  }

  update(id: number, updateSiteDto: UpdateSiteDto) {
    return this.prisma.site.update({ where: { id }, data: updateSiteDto });
  }

  remove(id: number) {
    return this.prisma.site.delete({ where: { id } });
  }

  createSitePayment(createSitePaymentDto: CreateSitePaymentDto) {
    return this.prisma.sitePayment.create({ data: createSitePaymentDto });
  }

  findAllSitePayments(id: number) {
    return this.prisma.sitePayment.findMany({ where: { siteId: id } });
  }

  async findTotalSitePayment(id: number) {
    const aggregate = await this.prisma.sitePayment.aggregate({
      _sum: {
        amount: true,
      },
      where: { siteId: id },
    });
    return aggregate._sum;
  }
}
