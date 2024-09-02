/*
  Warnings:

  - Added the required column `allergicHistory` to the `MedicalHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usingDrugs` to the `MedicalHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodType` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marriageStatus` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientContury` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientGuardianName` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientGuardianPhone` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientGuardianRelation` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MedicalHistory` ADD COLUMN `allergicHistory` VARCHAR(100) NOT NULL,
    ADD COLUMN `usingDrugs` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Patient` ADD COLUMN `bloodType` VARCHAR(100) NOT NULL,
    ADD COLUMN `marriageStatus` VARCHAR(100) NOT NULL,
    ADD COLUMN `patientContury` VARCHAR(100) NOT NULL,
    ADD COLUMN `patientGuardianName` VARCHAR(100) NOT NULL,
    ADD COLUMN `patientGuardianPhone` VARCHAR(100) NOT NULL,
    ADD COLUMN `patientGuardianRelation` VARCHAR(100) NOT NULL;
