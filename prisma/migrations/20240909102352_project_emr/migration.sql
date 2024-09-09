/*
  Warnings:

  - You are about to drop the column `dietStatus` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `needEducation` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `needNursingService` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `primaryPhysician` on the `NursingSurvey` table. All the data in the column will be lost.
  - You are about to drop the `Insurance` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `admissionDate` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allergicHistory` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dischargeDate` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insuranceCode` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insuranceCompany` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insuranceType` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `painLevel` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryDoctor` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryNurse` to the `NursingSurvey` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Insurance` DROP FOREIGN KEY `Insurance_patientIdx_fkey`;

-- AlterTable
ALTER TABLE `NursingSurvey` DROP COLUMN `dietStatus`,
    DROP COLUMN `needEducation`,
    DROP COLUMN `needNursingService`,
    DROP COLUMN `primaryPhysician`,
    ADD COLUMN `admissionDate` VARCHAR(50) NOT NULL,
    ADD COLUMN `allergicHistory` VARCHAR(200) NOT NULL,
    ADD COLUMN `dischargeDate` VARCHAR(50) NOT NULL,
    ADD COLUMN `insuranceCode` VARCHAR(50) NOT NULL,
    ADD COLUMN `insuranceCompany` VARCHAR(50) NOT NULL,
    ADD COLUMN `insuranceType` VARCHAR(50) NOT NULL,
    ADD COLUMN `painLevel` VARCHAR(200) NOT NULL,
    ADD COLUMN `primaryDoctor` VARCHAR(20) NOT NULL,
    ADD COLUMN `primaryNurse` VARCHAR(20) NOT NULL;

-- DropTable
DROP TABLE `Insurance`;
