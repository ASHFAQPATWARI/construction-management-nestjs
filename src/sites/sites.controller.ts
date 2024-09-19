import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateSitePaymentDto } from './dto/create-site-payment.dto';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import {
  SitePaymentEntity,
  SitePaymentTotal,
} from './entities/site-payment.entity';
import { SiteEntity } from './entities/site.entity';
import { SitesService } from './sites.service';

@Controller('sites')
@ApiTags('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  @ApiCreatedResponse({ type: SiteEntity })
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.sitesService.create(createSiteDto);
  }

  @Get()
  @ApiOkResponse({ type: SiteEntity, isArray: true })
  findAll() {
    return this.sitesService.findAll();
  }

  @Get('/site-payment')
  getAllSitePayments() {
    return this.sitesService.getAllSitePayments();
  }

  @Get(':id')
  @ApiOkResponse({ type: SiteEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const site = await this.sitesService.findOne(id);
    if (!site) {
      throw new NotFoundException(`Site with ${id} does not exist.`);
    }
    return site;
  }

  @Patch(':id')
  @ApiOkResponse({ type: SiteEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSiteDto: UpdateSiteDto,
  ) {
    return this.sitesService.update(id, updateSiteDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: SiteEntity })
  remove(@Param('id') id: string) {
    return this.sitesService.remove(+id);
  }

  @Delete('/site-payment/:id')
  deleteSitePayment(@Param('id') id: string) {
    return this.sitesService.deleteSitePayment(id);
  }

  @Post('payments')
  @ApiCreatedResponse({ type: SitePaymentEntity })
  async createSitePayment(@Body() createSitePaymentDto: CreateSitePaymentDto) {
    return this.sitesService.createSitePayment(createSitePaymentDto);
  }

  @Get(':id/payments')
  @ApiOkResponse({ type: SitePaymentEntity, isArray: true })
  findAllPayments(@Param('id', ParseIntPipe) id: number) {
    return this.sitesService.findAllSitePayments(id);
  }

  @Get(':id/payments/total')
  @ApiOkResponse({ type: SitePaymentTotal })
  findTotalSitePayment(@Param('id', ParseIntPipe) id: number) {
    return this.sitesService.findTotalSitePayment(id);
  }
}
