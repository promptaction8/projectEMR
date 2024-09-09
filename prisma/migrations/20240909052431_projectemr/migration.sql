/*
  Warnings:

  - You are about to drop the column `phone` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `chartNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Patient_phone_key` ON `Patient`;

-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `phone`,
    ADD COLUMN `chartNumber` VARCHAR(50) NOT NULL;
