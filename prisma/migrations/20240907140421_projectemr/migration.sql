/*
  Warnings:

  - You are about to drop the column `medicationDate` on the `MedicationRecord` table. All the data in the column will be lost.
  - You are about to drop the column `medicationDose` on the `MedicationRecord` table. All the data in the column will be lost.
  - You are about to drop the column `medicationEmployee` on the `MedicationRecord` table. All the data in the column will be lost.
  - You are about to drop the column `medicationName` on the `MedicationRecord` table. All the data in the column will be lost.
  - You are about to drop the column `medicationResult` on the `MedicationRecord` table. All the data in the column will be lost.
  - You are about to drop the column `medicationTime` on the `MedicationRecord` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `allergicHistory` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `contury` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `familyMedicalHistory` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `mainSymptoms` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `mentalStatus` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `occupationStatus` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `pastMedicalHistory` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `physicalStatus` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `religionStatus` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `roomNumber` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `usingDrugs` on the `NursingSurvey` table. All the data in the column will be lost.
  - Added the required column `date` to the `MedicationRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dose` to the `MedicationRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee` to the `MedicationRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `MedicationRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `MedicationRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `MedicationRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MedicationRecord` DROP COLUMN `medicationDate`,
    DROP COLUMN `medicationDose`,
    DROP COLUMN `medicationEmployee`,
    DROP COLUMN `medicationName`,
    DROP COLUMN `medicationResult`,
    DROP COLUMN `medicationTime`,
    ADD COLUMN `date` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `dose` VARCHAR(100) NOT NULL,
    ADD COLUMN `employee` VARCHAR(100) NOT NULL,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `result` VARCHAR(100) NOT NULL,
    ADD COLUMN `time` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `NursingSurvey` DROP COLUMN `address`,
    DROP COLUMN `allergicHistory`,
    DROP COLUMN `contury`,
    DROP COLUMN `dateOfBirth`,
    DROP COLUMN `familyMedicalHistory`,
    DROP COLUMN `gender`,
    DROP COLUMN `mainSymptoms`,
    DROP COLUMN `mentalStatus`,
    DROP COLUMN `name`,
    DROP COLUMN `occupationStatus`,
    DROP COLUMN `pastMedicalHistory`,
    DROP COLUMN `phone`,
    DROP COLUMN `physicalStatus`,
    DROP COLUMN `religionStatus`,
    DROP COLUMN `roomNumber`,
    DROP COLUMN `usingDrugs`;
