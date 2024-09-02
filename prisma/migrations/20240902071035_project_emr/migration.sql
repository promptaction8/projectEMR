/*
  Warnings:

  - You are about to drop the `LivingEnvironment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `livingEnvironment` to the `MedicalHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `LivingEnvironment` DROP FOREIGN KEY `LivingEnvironment_patientIdx_fkey`;

-- AlterTable
ALTER TABLE `MedicalHistory` ADD COLUMN `livingEnvironment` VARCHAR(100) NOT NULL;

-- DropTable
DROP TABLE `LivingEnvironment`;
