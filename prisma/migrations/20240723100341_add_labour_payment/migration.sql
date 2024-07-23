/*
  Warnings:

  - Added the required column `rate` to the `Labour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteId` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Labour` ADD COLUMN `rate` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Purchase` ADD COLUMN `siteId` INTEGER NOT NULL,
    MODIFY `referenceNo` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `LabourPayment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `labourId` INTEGER NOT NULL,
    `siteId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `amount` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `Site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LabourPayment` ADD CONSTRAINT `LabourPayment_labourId_fkey` FOREIGN KEY (`labourId`) REFERENCES `Labour`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LabourPayment` ADD CONSTRAINT `LabourPayment_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `Site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
