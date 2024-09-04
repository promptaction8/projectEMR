/*
  Warnings:

  - Added the required column `roomNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Patient` ADD COLUMN `roomNumber` VARCHAR(50) NOT NULL;
