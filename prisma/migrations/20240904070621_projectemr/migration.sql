/*
  Warnings:

  - You are about to drop the column `contury` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `nationality` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `contury`,
    ADD COLUMN `nationality` VARCHAR(50) NOT NULL;
