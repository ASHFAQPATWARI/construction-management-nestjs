-- DropForeignKey
ALTER TABLE `LabourPaymentItem` DROP FOREIGN KEY `LabourPaymentItem_labourPaymentId_fkey`;

-- AddForeignKey
ALTER TABLE `LabourPaymentItem` ADD CONSTRAINT `LabourPaymentItem_labourPaymentId_fkey` FOREIGN KEY (`labourPaymentId`) REFERENCES `LabourPayment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
