import { ApiProperty, PickType } from "@nestjs/swagger";
import { Purchase, PurchaseItem } from "@prisma/client";

export class PurchaseEnitity implements Purchase {
    id: number;
    supplierId: number;
    amount: number;
    referenceNo: string | null;
    siteId: number;
    createdAt: Date;
}

export class PurchaseEntityWithPurchaseItems extends PurchaseEnitity {
    @ApiProperty({ isArray: true})
    purchaseItem: PurchaseItem[];
}

export class PurchaseTotal extends PickType(PurchaseEnitity, [
    'amount',
  ] as const) {}
