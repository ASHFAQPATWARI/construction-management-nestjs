/*
  Warnings:

  - You are about to drop the column `purchaseId` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Item` DROP FOREIGN KEY `Item_purchaseId_fkey`;

-- AlterTable
ALTER TABLE `Item` DROP COLUMN `purchaseId`;

-- CreateTable
CREATE TABLE `_ItemToPurchase` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ItemToPurchase_AB_unique`(`A`, `B`),
    INDEX `_ItemToPurchase_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ItemToPurchase` ADD CONSTRAINT `_ItemToPurchase_A_fkey` FOREIGN KEY (`A`) REFERENCES `Item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ItemToPurchase` ADD CONSTRAINT `_ItemToPurchase_B_fkey` FOREIGN KEY (`B`) REFERENCES `Purchase`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
