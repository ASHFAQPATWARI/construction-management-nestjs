import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PurchaseEntityWithPurchaseItems, PurchaseTotal } from './entities/purchase.entity';

@Controller('purchase')
@ApiTags('Purchase')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  create(@Body(ValidationPipe) createPurchaseDto: CreatePurchaseDto) {
    return this.purchasesService.create(createPurchaseDto);
  }

  @Get()
  findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.purchasesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchasesService.update(id, updatePurchaseDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.purchasesService.remove(id);
  }

  @Get('site/:siteId')
  @ApiOkResponse({type: PurchaseEntityWithPurchaseItems })
  findPurchaseBySiteId(@Param('siteId', ParseIntPipe) id: number) {
    return this.purchasesService.findPurchaseBySiteId(id);
  }

  @Get('site/:siteId/total')
  @ApiOkResponse({type: PurchaseTotal})
  findTotalPurchaseBySiteId(@Param('siteId', ParseIntPipe) id: number) {
    return this.purchasesService.findTotalPurchaseBySiteId(id);
  }
}
