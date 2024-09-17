import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}
  
  async create(createPurchaseDto: CreatePurchaseDto) {    
    return await this.prisma.purchase.create({ data: createPurchaseDto });
  }
  

  async findAll() {
    return await this.prisma.purchase.findMany();
  }

  async findOne(id: number) {
    const purchase = await this.prisma.purchase.findFirstOrThrow({ where: { id } });
    return purchase;  
  }

  async update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return await this.prisma.purchase.update({
      data: updatePurchaseDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.purchase.delete({ where: { id: id } });
  }

  findPurchaseBySiteId(siteId: number) {
    return this.prisma.purchase.findMany({
      where: {
        siteId,
      },
      include: {
        purchaseItem: true,
      },
    });
  }

  async findTotalPurchaseBySiteId(id: number) {
    const aggregate = await this.prisma.purchase.aggregate({
      _sum: {
        amount: true,
      },
      where: { siteId: id },
    });
    return aggregate._sum;
  }
}
