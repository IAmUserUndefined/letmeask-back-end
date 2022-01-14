/*
  Warnings:

  - You are about to drop the column `roomId` on the `question` table. All the data in the column will be lost.
  - Added the required column `roomCode` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `Question_roomId_fkey`;

-- AlterTable
ALTER TABLE `question` DROP COLUMN `roomId`,
    ADD COLUMN `roomCode` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_roomCode_fkey` FOREIGN KEY (`roomCode`) REFERENCES `Room`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
