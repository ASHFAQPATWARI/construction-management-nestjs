import { Prisma } from "@prisma/client";
import { Type } from "class-transformer";
import { Allow, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

class CreatePurchaseItemDto implements Prisma.PurchaseItemUncheckedCreateWithoutPurchaseInput
{
  @IsNumber()
  @IsNotEmpty()
  productId: number;
}

class CreatePurchaseItemCreatePurchaseItemRelationDto {
  @Allow()
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseItemDto)
  create?: CreatePurchaseItemDto[];

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => ConnectPurchaseItemDto)
  connect?: ConnectPurchaseItemDto[];
}

class ConnectPurchaseItemDto extends CreatePurchaseItemDto implements Prisma.PurchaseItemUncheckedUpdateInput
{

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  purchaseId: number;

  @IsNumber()
  @IsNotEmpty()
  productId: number;
}


  export class CreatePurchaseDto {
    @IsNumber()
    @IsNotEmpty()
    supplierId: number;

    @Allow()
    @ValidateNested({ each: true })
    @Type(() => CreatePurchaseItemCreatePurchaseItemRelationDto )
    purchaseItem?: CreatePurchaseItemCreatePurchaseItemRelationDto;

    @IsString()
    @IsOptional()
    referenceNo: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    @IsNotEmpty()
    siteId: number;
  }
