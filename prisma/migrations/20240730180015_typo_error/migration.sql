/*
  Warnings:

  - You are about to drop the column `paymenntMethod` on the `SitePayment` table. All the data in the column will be lost.
  - Added the required column `paymentMethod` to the `SitePayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SitePayment` DROP COLUMN `paymenntMethod`,
    ADD COLUMN `paymentMethod` ENUM('cash', 'cheque', 'banktransfer', 'upi') NOT NULL;
