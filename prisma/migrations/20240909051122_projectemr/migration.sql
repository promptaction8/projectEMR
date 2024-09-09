/*
  Warnings:

  - You are about to drop the column `address` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `bloodType` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `guardianName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `guardianPhone` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `guardianRelation` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `insuranceStatus` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `marriageStatus` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `primaryPhysician` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `religion` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `roomNumber` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `address` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodType` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guardianName` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guardianPhone` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guardianRelation` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insuranceStatus` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryPhysician` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `religion` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `NursingSurvey` ADD COLUMN `address` VARCHAR(200) NOT NULL,
    ADD COLUMN `age` VARCHAR(30) NOT NULL,
    ADD COLUMN `bloodType` VARCHAR(20) NOT NULL,
    ADD COLUMN `guardianName` VARCHAR(50) NOT NULL,
    ADD COLUMN `guardianPhone` VARCHAR(50) NOT NULL,
    ADD COLUMN `guardianRelation` VARCHAR(50) NOT NULL,
    ADD COLUMN `insuranceStatus` BOOLEAN NOT NULL,
    ADD COLUMN `marriageStatus` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `nationality` VARCHAR(50) NOT NULL,
    ADD COLUMN `occupation` VARCHAR(100) NOT NULL,
    ADD COLUMN `primaryPhysician` VARCHAR(20) NOT NULL,
    ADD COLUMN `religion` VARCHAR(20) NOT NULL,
    ADD COLUMN `roomNumber` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `address`,
    DROP COLUMN `bloodType`,
    DROP COLUMN `dateOfBirth`,
    DROP COLUMN `gender`,
    DROP COLUMN `guardianName`,
    DROP COLUMN `guardianPhone`,
    DROP COLUMN `guardianRelation`,
    DROP COLUMN `insuranceStatus`,
    DROP COLUMN `marriageStatus`,
    DROP COLUMN `nationality`,
    DROP COLUMN `occupation`,
    DROP COLUMN `primaryPhysician`,
    DROP COLUMN `religion`,
    DROP COLUMN `roomNumber`;
