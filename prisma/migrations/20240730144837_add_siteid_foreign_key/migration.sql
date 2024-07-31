/*
  Warnings:

  - Added the required column `siteId` to the `SitePayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SitePayment` ADD COLUMN `siteId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `SitePayment` ADD CONSTRAINT `SitePayment_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `Site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
