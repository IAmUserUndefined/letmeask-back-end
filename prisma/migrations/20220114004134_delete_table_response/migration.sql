/*
  Warnings:

  - You are about to drop the `response` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `response` DROP FOREIGN KEY `Response_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `response` DROP FOREIGN KEY `Response_userId_fkey`;

-- AlterTable
ALTER TABLE `question` ADD COLUMN `response` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `response`;
