/*
  Warnings:

  - You are about to drop the column `code` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `response` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Question_code_key` ON `question`;

-- DropIndex
DROP INDEX `Response_code_key` ON `response`;

-- AlterTable
ALTER TABLE `question` DROP COLUMN `code`;

-- AlterTable
ALTER TABLE `response` DROP COLUMN `code`;
