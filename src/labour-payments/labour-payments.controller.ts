import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateLabourPaymentDto } from './dto/create-labour-payment.dto';
import { UpdateLabourPaymentDto } from './dto/update-labour-payment.dto';
import {
  LabourPaymentEntityWithPaymentItems,
  LabourPaymentTotal,
} from './entities/labour-payment.entity';
import { LabourPaymentsService } from './labour-payments.service';

@Controller('labour-payments')
@ApiTags('Labour Payments')
export class LabourPaymentsController {
  constructor(private readonly labourPaymentsService: LabourPaymentsService) {}

  @Post()
  create(@Body() createLabourPaymentDto: CreateLabourPaymentDto) {
    return this.labourPaymentsService.create(createLabourPaymentDto);
  }

  @Get()
  findAll() {
    return this.labourPaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.labourPaymentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLabourPaymentDto: UpdateLabourPaymentDto,
  ) {
    return this.labourPaymentsService.update(id, updateLabourPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.labourPaymentsService.remove(+id);
  }

  // Get all labour payments by site id
  @Get('sites/:siteId')
  @ApiOkResponse({ type: LabourPaymentEntityWithPaymentItems })
  findLabourPaymentsBySiteId(@Param('siteId', ParseIntPipe) id: number) {
    return this.labourPaymentsService.findLabourPaymentsBySiteId(id);
  }

  // Get total site payments
  @Get('sites/:siteId/total')
  @ApiOkResponse({ type: LabourPaymentTotal })
  findTotalLabourPaymentBySiteId(@Param('siteId', ParseIntPipe) id: number) {
    return this.labourPaymentsService.findTotalLabourPaymentBySiteId(id);
  }
}
