/*
  Warnings:

  - You are about to drop the column `patientDateOfBirth` on the `BradenScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientGender` on the `BradenScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientName` on the `BradenScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientRoomNumber` on the `BradenScale` table. All the data in the column will be lost.
  - You are about to drop the column `cooperationContent` on the `Cooperation` table. All the data in the column will be lost.
  - You are about to drop the column `cooperationDate` on the `Cooperation` table. All the data in the column will be lost.
  - You are about to drop the column `cooperationEmployee` on the `Cooperation` table. All the data in the column will be lost.
  - You are about to drop the column `cooperationResult` on the `Cooperation` table. All the data in the column will be lost.
  - You are about to drop the column `cooperationTime` on the `Cooperation` table. All the data in the column will be lost.
  - The primary key for the `Insurance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `insuranceCompany` on the `Insurance` table. All the data in the column will be lost.
  - You are about to drop the column `insuranceIdx` on the `Insurance` table. All the data in the column will be lost.
  - You are about to drop the column `insuranceNumber` on the `Insurance` table. All the data in the column will be lost.
  - You are about to drop the column `insuranceType` on the `Insurance` table. All the data in the column will be lost.
  - You are about to drop the column `patientDateOfBirth` on the `MMSE` table. All the data in the column will be lost.
  - You are about to drop the column `patientGender` on the `MMSE` table. All the data in the column will be lost.
  - You are about to drop the column `patientName` on the `MMSE` table. All the data in the column will be lost.
  - You are about to drop the column `patientRoomNumber` on the `MMSE` table. All the data in the column will be lost.
  - You are about to alter the column `orientationToTime` on the `MMSE` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Timestamp(0)`.
  - The primary key for the `MedicalHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `medicalHistoryIdx` on the `MedicalHistory` table. All the data in the column will be lost.
  - You are about to drop the column `patientDateOfBirth` on the `MorseFallScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientGender` on the `MorseFallScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientName` on the `MorseFallScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientRoomNumber` on the `MorseFallScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientDateOfBirth` on the `NumericPainRatingScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientGender` on the `NumericPainRatingScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientName` on the `NumericPainRatingScale` table. All the data in the column will be lost.
  - You are about to drop the column `patientRoomNumber` on the `NumericPainRatingScale` table. All the data in the column will be lost.
  - The primary key for the `NursingHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nursingContent` on the `NursingHistory` table. All the data in the column will be lost.
  - You are about to drop the column `nursingDate` on the `NursingHistory` table. All the data in the column will be lost.
  - You are about to drop the column `nursingEmployee` on the `NursingHistory` table. All the data in the column will be lost.
  - You are about to drop the column `nursingHistoryIdx` on the `NursingHistory` table. All the data in the column will be lost.
  - You are about to drop the column `nursingResult` on the `NursingHistory` table. All the data in the column will be lost.
  - You are about to drop the column `nursingTime` on the `NursingHistory` table. All the data in the column will be lost.
  - You are about to drop the column `nursingType` on the `NursingHistory` table. All the data in the column will be lost.
  - The primary key for the `NursingPlan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nursingPlanContent` on the `NursingPlan` table. All the data in the column will be lost.
  - You are about to drop the column `nursingPlanDate` on the `NursingPlan` table. All the data in the column will be lost.
  - You are about to drop the column `nursingPlanEmployee` on the `NursingPlan` table. All the data in the column will be lost.
  - You are about to drop the column `nursingPlanIdx` on the `NursingPlan` table. All the data in the column will be lost.
  - You are about to drop the column `nursingPlanTime` on the `NursingPlan` table. All the data in the column will be lost.
  - You are about to drop the column `nursingPlanType` on the `NursingPlan` table. All the data in the column will be lost.
  - The primary key for the `NursingSurvey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nursingSurveyIdx` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `patientAddress` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `patientContury` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `patientDateOfBirth` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `patientGender` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `patientName` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `patientPhone` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `patientRoomNumber` on the `NursingSurvey` table. All the data in the column will be lost.
  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `patientContury` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `patientGuardianName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `patientGuardianPhone` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `patientGuardianRelation` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `patientIdx` on the `Patient` table. All the data in the column will be lost.
  - You are about to alter the column `dateOfBirth` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Timestamp(0)`.
  - You are about to alter the column `gender` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `TinyInt`.
  - You are about to alter the column `phone` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `ssn` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `emergencyContactName` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `emergencyContactPhone` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - You are about to alter the column `religion` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - You are about to alter the column `primaryPhysician` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - You are about to alter the column `bloodType` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - You are about to alter the column `marriageStatus` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `TinyInt`.
  - You are about to drop the column `prnOrderContent` on the `PrnOrder` table. All the data in the column will be lost.
  - You are about to drop the column `prnOrderDate` on the `PrnOrder` table. All the data in the column will be lost.
  - You are about to drop the column `prnOrderEmployee` on the `PrnOrder` table. All the data in the column will be lost.
  - You are about to drop the column `prnOrderResult` on the `PrnOrder` table. All the data in the column will be lost.
  - You are about to drop the column `prnOrderTime` on the `PrnOrder` table. All the data in the column will be lost.
  - The primary key for the `SurgeryRegister` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `surgeryContent` on the `SurgeryRegister` table. All the data in the column will be lost.
  - You are about to drop the column `surgeryDate` on the `SurgeryRegister` table. All the data in the column will be lost.
  - You are about to drop the column `surgeryEmployee` on the `SurgeryRegister` table. All the data in the column will be lost.
  - You are about to drop the column `surgeryIdx` on the `SurgeryRegister` table. All the data in the column will be lost.
  - You are about to drop the column `surgeryName` on the `SurgeryRegister` table. All the data in the column will be lost.
  - You are about to drop the column `surgeryPatient` on the `SurgeryRegister` table. All the data in the column will be lost.
  - You are about to drop the column `surgeryResult` on the `SurgeryRegister` table. All the data in the column will be lost.
  - You are about to drop the column `surgeryTime` on the `SurgeryRegister` table. All the data in the column will be lost.
  - You are about to drop the column `surgeryType` on the `SurgeryRegister` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `BradenScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `BradenScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BradenScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `BradenScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Cooperation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Cooperation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee` to the `Cooperation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `Cooperation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Cooperation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idx` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `MMSE` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `MMSE` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `MMSE` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `MMSE` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idx` to the `MedicalHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `MorseFallScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `MorseFallScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `MorseFallScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `MorseFallScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `NumericPainRatingScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `NumericPainRatingScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `NumericPainRatingScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `NumericPainRatingScale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `NursingHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `NursingHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee` to the `NursingHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idx` to the `NursingHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `NursingHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `NursingHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `NursingHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `NursingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `NursingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee` to the `NursingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idx` to the `NursingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `NursingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `NursingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contury` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idx` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Contury` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GuardianName` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GuardianPhone` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GuardianRelation` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idx` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `PrnOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `PrnOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee` to the `PrnOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `PrnOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `PrnOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `SurgeryRegister` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `SurgeryRegister` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee` to the `SurgeryRegister` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idx` to the `SurgeryRegister` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `SurgeryRegister` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `SurgeryRegister` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `SurgeryRegister` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `SurgeryRegister` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `BradenScale` DROP FOREIGN KEY `BradenScale_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `Cooperation` DROP FOREIGN KEY `Cooperation_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `Insurance` DROP FOREIGN KEY `Insurance_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `MMSE` DROP FOREIGN KEY `MMSE_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `MedicalHistory` DROP FOREIGN KEY `MedicalHistory_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `MedicationRecord` DROP FOREIGN KEY `MedicationRecord_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `MorseFallScale` DROP FOREIGN KEY `MorseFallScale_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `NumericPainRatingScale` DROP FOREIGN KEY `NumericPainRatingScale_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `NursingHistory` DROP FOREIGN KEY `NursingHistory_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `NursingPlan` DROP FOREIGN KEY `NursingPlan_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `NursingSurvey` DROP FOREIGN KEY `NursingSurvey_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `PrnOrder` DROP FOREIGN KEY `PrnOrder_patientIdx_fkey`;

-- DropForeignKey
ALTER TABLE `SurgeryRegister` DROP FOREIGN KEY `SurgeryRegister_patientIdx_fkey`;

-- AlterTable
ALTER TABLE `BradenScale` DROP COLUMN `patientDateOfBirth`,
    DROP COLUMN `patientGender`,
    DROP COLUMN `patientName`,
    DROP COLUMN `patientRoomNumber`,
    ADD COLUMN `dateOfBirth` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `gender` BOOLEAN NOT NULL,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `roomNumber` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Cooperation` DROP COLUMN `cooperationContent`,
    DROP COLUMN `cooperationDate`,
    DROP COLUMN `cooperationEmployee`,
    DROP COLUMN `cooperationResult`,
    DROP COLUMN `cooperationTime`,
    ADD COLUMN `content` VARCHAR(100) NOT NULL,
    ADD COLUMN `date` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `employee` VARCHAR(100) NOT NULL,
    ADD COLUMN `result` VARCHAR(100) NOT NULL,
    ADD COLUMN `time` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `Insurance` DROP PRIMARY KEY,
    DROP COLUMN `insuranceCompany`,
    DROP COLUMN `insuranceIdx`,
    DROP COLUMN `insuranceNumber`,
    DROP COLUMN `insuranceType`,
    ADD COLUMN `code` VARCHAR(50) NOT NULL,
    ADD COLUMN `company` VARCHAR(50) NOT NULL,
    ADD COLUMN `idx` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `type` VARCHAR(50) NOT NULL,
    ADD PRIMARY KEY (`idx`);

-- AlterTable
ALTER TABLE `MMSE` DROP COLUMN `patientDateOfBirth`,
    DROP COLUMN `patientGender`,
    DROP COLUMN `patientName`,
    DROP COLUMN `patientRoomNumber`,
    ADD COLUMN `dateOfBirth` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `gender` BOOLEAN NOT NULL,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `roomNumber` VARCHAR(100) NOT NULL,
    MODIFY `orientationToTime` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `MedicalHistory` DROP PRIMARY KEY,
    DROP COLUMN `medicalHistoryIdx`,
    ADD COLUMN `idx` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `mainSymptoms` VARCHAR(200) NOT NULL,
    MODIFY `pastMedicalHistory` VARCHAR(200) NOT NULL,
    MODIFY `familyMedicalHistory` VARCHAR(200) NOT NULL,
    MODIFY `mentalHealthStatus` VARCHAR(200) NOT NULL,
    MODIFY `physicalHealthStatus` VARCHAR(200) NOT NULL,
    MODIFY `previousTreatmentHistory` VARCHAR(200) NOT NULL,
    MODIFY `usingDrugs` VARCHAR(200) NOT NULL,
    MODIFY `livingEnvironment` VARCHAR(200) NOT NULL,
    ADD PRIMARY KEY (`idx`);

-- AlterTable
ALTER TABLE `MorseFallScale` DROP COLUMN `patientDateOfBirth`,
    DROP COLUMN `patientGender`,
    DROP COLUMN `patientName`,
    DROP COLUMN `patientRoomNumber`,
    ADD COLUMN `dateOfBirth` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `gender` VARCHAR(100) NOT NULL,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `roomNumber` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `NumericPainRatingScale` DROP COLUMN `patientDateOfBirth`,
    DROP COLUMN `patientGender`,
    DROP COLUMN `patientName`,
    DROP COLUMN `patientRoomNumber`,
    ADD COLUMN `dateOfBirth` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `gender` BOOLEAN NOT NULL,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `roomNumber` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `NursingHistory` DROP PRIMARY KEY,
    DROP COLUMN `nursingContent`,
    DROP COLUMN `nursingDate`,
    DROP COLUMN `nursingEmployee`,
    DROP COLUMN `nursingHistoryIdx`,
    DROP COLUMN `nursingResult`,
    DROP COLUMN `nursingTime`,
    DROP COLUMN `nursingType`,
    ADD COLUMN `content` VARCHAR(400) NOT NULL,
    ADD COLUMN `date` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `employee` VARCHAR(50) NOT NULL,
    ADD COLUMN `idx` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `result` VARCHAR(400) NOT NULL,
    ADD COLUMN `time` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `type` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`idx`);

-- AlterTable
ALTER TABLE `NursingPlan` DROP PRIMARY KEY,
    DROP COLUMN `nursingPlanContent`,
    DROP COLUMN `nursingPlanDate`,
    DROP COLUMN `nursingPlanEmployee`,
    DROP COLUMN `nursingPlanIdx`,
    DROP COLUMN `nursingPlanTime`,
    DROP COLUMN `nursingPlanType`,
    ADD COLUMN `content` VARCHAR(400) NOT NULL,
    ADD COLUMN `date` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `employee` VARCHAR(50) NOT NULL,
    ADD COLUMN `idx` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `time` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `type` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`idx`);

-- AlterTable
ALTER TABLE `NursingSurvey` DROP PRIMARY KEY,
    DROP COLUMN `nursingSurveyIdx`,
    DROP COLUMN `patientAddress`,
    DROP COLUMN `patientContury`,
    DROP COLUMN `patientDateOfBirth`,
    DROP COLUMN `patientGender`,
    DROP COLUMN `patientName`,
    DROP COLUMN `patientPhone`,
    DROP COLUMN `patientRoomNumber`,
    ADD COLUMN `address` VARCHAR(50) NOT NULL,
    ADD COLUMN `contury` VARCHAR(50) NOT NULL,
    ADD COLUMN `dateOfBirth` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `gender` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `idx` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `phone` VARCHAR(50) NOT NULL,
    ADD COLUMN `roomNumber` VARCHAR(50) NOT NULL,
    MODIFY `pastMedicalHistory` VARCHAR(200) NOT NULL,
    MODIFY `familyMedicalHistory` VARCHAR(200) NOT NULL,
    MODIFY `usingDrugs` VARCHAR(200) NOT NULL,
    MODIFY `mainSymptoms` VARCHAR(200) NOT NULL,
    MODIFY `vitalSigns` VARCHAR(200) NOT NULL,
    MODIFY `physicalStatus` VARCHAR(200) NOT NULL,
    MODIFY `mentalStatus` VARCHAR(200) NOT NULL,
    MODIFY `smokingStatus` VARCHAR(200) NOT NULL,
    MODIFY `drinkingStatus` VARCHAR(200) NOT NULL,
    MODIFY `dietStatus` VARCHAR(200) NOT NULL,
    MODIFY `occupationStatus` VARCHAR(200) NOT NULL,
    MODIFY `needNursingService` VARCHAR(200) NOT NULL,
    MODIFY `needEducation` VARCHAR(200) NOT NULL,
    ADD PRIMARY KEY (`idx`);

-- AlterTable
ALTER TABLE `Patient` DROP PRIMARY KEY,
    DROP COLUMN `patientContury`,
    DROP COLUMN `patientGuardianName`,
    DROP COLUMN `patientGuardianPhone`,
    DROP COLUMN `patientGuardianRelation`,
    DROP COLUMN `patientIdx`,
    ADD COLUMN `Contury` VARCHAR(50) NOT NULL,
    ADD COLUMN `GuardianName` VARCHAR(50) NOT NULL,
    ADD COLUMN `GuardianPhone` VARCHAR(50) NOT NULL,
    ADD COLUMN `GuardianRelation` VARCHAR(50) NOT NULL,
    ADD COLUMN `idx` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `dateOfBirth` TIMESTAMP(0) NOT NULL,
    MODIFY `gender` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `phone` VARCHAR(50) NOT NULL,
    MODIFY `ssn` VARCHAR(50) NOT NULL,
    MODIFY `address` VARCHAR(200) NOT NULL,
    MODIFY `emergencyContactName` VARCHAR(50) NOT NULL,
    MODIFY `emergencyContactPhone` VARCHAR(50) NOT NULL,
    MODIFY `religion` VARCHAR(20) NOT NULL,
    MODIFY `primaryPhysician` VARCHAR(20) NOT NULL,
    MODIFY `bloodType` VARCHAR(20) NOT NULL,
    MODIFY `marriageStatus` BOOLEAN NOT NULL DEFAULT false,
    ADD PRIMARY KEY (`idx`);

-- AlterTable
ALTER TABLE `PrnOrder` DROP COLUMN `prnOrderContent`,
    DROP COLUMN `prnOrderDate`,
    DROP COLUMN `prnOrderEmployee`,
    DROP COLUMN `prnOrderResult`,
    DROP COLUMN `prnOrderTime`,
    ADD COLUMN `content` VARCHAR(100) NOT NULL,
    ADD COLUMN `date` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `employee` VARCHAR(100) NOT NULL,
    ADD COLUMN `result` VARCHAR(100) NOT NULL,
    ADD COLUMN `time` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `SurgeryRegister` DROP PRIMARY KEY,
    DROP COLUMN `surgeryContent`,
    DROP COLUMN `surgeryDate`,
    DROP COLUMN `surgeryEmployee`,
    DROP COLUMN `surgeryIdx`,
    DROP COLUMN `surgeryName`,
    DROP COLUMN `surgeryPatient`,
    DROP COLUMN `surgeryResult`,
    DROP COLUMN `surgeryTime`,
    DROP COLUMN `surgeryType`,
    ADD COLUMN `content` VARCHAR(400) NOT NULL,
    ADD COLUMN `date` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `employee` VARCHAR(200) NOT NULL,
    ADD COLUMN `idx` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `result` VARCHAR(400) NOT NULL,
    ADD COLUMN `time` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `type` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`idx`);

-- AddForeignKey
ALTER TABLE `Insurance` ADD CONSTRAINT `Insurance_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalHistory` ADD CONSTRAINT `MedicalHistory_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NursingHistory` ADD CONSTRAINT `NursingHistory_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NursingPlan` ADD CONSTRAINT `NursingPlan_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NursingSurvey` ADD CONSTRAINT `NursingSurvey_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurgeryRegister` ADD CONSTRAINT `SurgeryRegister_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cooperation` ADD CONSTRAINT `Cooperation_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrnOrder` ADD CONSTRAINT `PrnOrder_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MorseFallScale` ADD CONSTRAINT `MorseFallScale_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BradenScale` ADD CONSTRAINT `BradenScale_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NumericPainRatingScale` ADD CONSTRAINT `NumericPainRatingScale_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MMSE` ADD CONSTRAINT `MMSE_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicationRecord` ADD CONSTRAINT `MedicationRecord_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`idx`) ON DELETE RESTRICT ON UPDATE CASCADE;
