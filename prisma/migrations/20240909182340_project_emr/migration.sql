/*
  Warnings:

  - You are about to alter the column `insuranceStatus` on the `NursingSurvey` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(50)`.
  - You are about to alter the column `marriageStatus` on the `NursingSurvey` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE `NursingSurvey` MODIFY `insuranceStatus` VARCHAR(50) NULL,
    MODIFY `marriageStatus` VARCHAR(20) NULL;
