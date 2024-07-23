/*
  Warnings:

  - You are about to drop the `_ItemToPurchase` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referenceNo` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ItemToPurchase` DROP FOREIGN KEY `_ItemToPurchase_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ItemToPurchase` DROP FOREIGN KEY `_ItemToPurchase_B_fkey`;

-- AlterTable
ALTER TABLE `Purchase` ADD COLUMN `amount` DOUBLE NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `referenceNo` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_ItemToPurchase`;

-- CreateTable
CREATE TABLE `PurchaseItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `purchaseId` INTEGER NOT NULL,
    `itemName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PurchaseItem` ADD CONSTRAINT `PurchaseItem_purchaseId_fkey` FOREIGN KEY (`purchaseId`) REFERENCES `Purchase`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
