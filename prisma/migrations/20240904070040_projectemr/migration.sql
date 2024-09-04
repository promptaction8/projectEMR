/*
  Warnings:

  - You are about to drop the column `Contury` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `GuardianName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `GuardianPhone` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `GuardianRelation` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContactName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContactPhone` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `contury` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guardianName` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guardianPhone` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guardianRelation` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `Contury`,
    DROP COLUMN `GuardianName`,
    DROP COLUMN `GuardianPhone`,
    DROP COLUMN `GuardianRelation`,
    DROP COLUMN `emergencyContactName`,
    DROP COLUMN `emergencyContactPhone`,
    ADD COLUMN `contury` VARCHAR(50) NOT NULL,
    ADD COLUMN `guardianName` VARCHAR(50) NOT NULL,
    ADD COLUMN `guardianPhone` VARCHAR(50) NOT NULL,
    ADD COLUMN `guardianRelation` VARCHAR(50) NOT NULL;
