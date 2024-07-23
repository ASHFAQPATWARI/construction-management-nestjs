/*
  Warnings:

  - You are about to drop the column `itemID` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Site` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Site` DROP FOREIGN KEY `Site_authorId_fkey`;

-- AlterTable
ALTER TABLE `Purchase` DROP COLUMN `itemID`;

-- AlterTable
ALTER TABLE `Site` DROP COLUMN `authorId`;
