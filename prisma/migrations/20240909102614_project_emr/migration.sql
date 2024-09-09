/*
  Warnings:

  - Added the required column `sex` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `NursingSurvey` ADD COLUMN `sex` VARCHAR(20) NOT NULL,
    MODIFY `vitalSigns` VARCHAR(200) NULL,
    MODIFY `smokingStatus` VARCHAR(200) NULL,
    MODIFY `drinkingStatus` VARCHAR(200) NULL,
    MODIFY `bloodType` VARCHAR(20) NULL,
    MODIFY `guardianName` VARCHAR(50) NULL,
    MODIFY `guardianPhone` VARCHAR(50) NULL,
    MODIFY `guardianRelation` VARCHAR(50) NULL,
    MODIFY `nationality` VARCHAR(50) NULL,
    MODIFY `occupation` VARCHAR(100) NULL,
    MODIFY `religion` VARCHAR(20) NULL,
    MODIFY `roomNumber` VARCHAR(50) NULL,
    MODIFY `admissionDate` VARCHAR(50) NULL,
    MODIFY `allergicHistory` VARCHAR(200) NULL,
    MODIFY `dischargeDate` VARCHAR(50) NULL,
    MODIFY `insuranceCode` VARCHAR(50) NULL,
    MODIFY `insuranceCompany` VARCHAR(50) NULL,
    MODIFY `insuranceType` VARCHAR(50) NULL,
    MODIFY `painLevel` VARCHAR(200) NULL,
    MODIFY `primaryDoctor` VARCHAR(20) NULL,
    MODIFY `primaryNurse` VARCHAR(20) NULL;
