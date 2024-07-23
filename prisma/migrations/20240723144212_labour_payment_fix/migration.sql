/*
  Warnings:

  - You are about to drop the column `labourId` on the `LabourPayment` table. All the data in the column will be lost.
  - You are about to drop the `Labour` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `LabourPayment` DROP FOREIGN KEY `LabourPayment_labourId_fkey`;

-- AlterTable
ALTER TABLE `LabourPayment` DROP COLUMN `labourId`;

-- DropTable
DROP TABLE `Labour`;

-- CreateTable
CREATE TABLE `LabourPaymentItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `labourPaymentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LabourPaymentItem` ADD CONSTRAINT `LabourPaymentItem_labourPaymentId_fkey` FOREIGN KEY (`labourPaymentId`) REFERENCES `LabourPayment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
