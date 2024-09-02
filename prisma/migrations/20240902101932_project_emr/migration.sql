-- CreateTable
CREATE TABLE `NursingHistory` (
    `patientIdx` INTEGER NOT NULL,
    `nursingHistoryIdx` INTEGER NOT NULL AUTO_INCREMENT,
    `nursingDate` TIMESTAMP(0) NOT NULL,
    `nursingTime` VARCHAR(100) NOT NULL,
    `nursingContent` VARCHAR(100) NOT NULL,
    `nursingType` VARCHAR(100) NOT NULL,
    `nursingResult` VARCHAR(100) NOT NULL,
    `nursingEmployee` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`nursingHistoryIdx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NursingPlan` (
    `patientIdx` INTEGER NOT NULL,
    `nursingPlanIdx` INTEGER NOT NULL AUTO_INCREMENT,
    `nursingPlanDate` TIMESTAMP(0) NOT NULL,
    `nursingPlanTime` VARCHAR(100) NOT NULL,
    `nursingPlanContent` VARCHAR(100) NOT NULL,
    `nursingPlanType` VARCHAR(100) NOT NULL,
    `nursingPlanEmployee` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`nursingPlanIdx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NursingSurvey` (
    `patientIdx` INTEGER NOT NULL,
    `nursingSurveyIdx` INTEGER NOT NULL AUTO_INCREMENT,
    `patientName` VARCHAR(100) NOT NULL,
    `patientGender` VARCHAR(100) NOT NULL,
    `patientDateOfBirth` VARCHAR(100) NOT NULL,
    `patientPhone` VARCHAR(100) NOT NULL,
    `patientAddress` VARCHAR(100) NOT NULL,
    `pastMedicalHistory` VARCHAR(100) NOT NULL,
    `familyMedicalHistory` VARCHAR(100) NOT NULL,
    `allergicHistory` VARCHAR(100) NOT NULL,
    `usingDrugs` VARCHAR(100) NOT NULL,
    `mainSymptoms` VARCHAR(100) NOT NULL,
    `vitalSigns` VARCHAR(100) NOT NULL,
    `physicalStatus` VARCHAR(100) NOT NULL,
    `mentalStatus` VARCHAR(100) NOT NULL,
    `smokingStatus` VARCHAR(100) NOT NULL,
    `drinkingStatus` VARCHAR(100) NOT NULL,
    `dietStatus` VARCHAR(100) NOT NULL,
    `occupationStatus` VARCHAR(100) NOT NULL,
    `religionStatus` VARCHAR(100) NOT NULL,
    `patientContury` VARCHAR(100) NOT NULL,
    `needNursingService` VARCHAR(100) NOT NULL,
    `needEducation` VARCHAR(100) NOT NULL,
    `patientRoomNumber` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`nursingSurveyIdx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurgeryRegister` (
    `patientIdx` INTEGER NOT NULL,
    `surgeryIdx` INTEGER NOT NULL AUTO_INCREMENT,
    `surgeryName` VARCHAR(100) NOT NULL,
    `surgeryDate` TIMESTAMP(0) NOT NULL,
    `surgeryTime` VARCHAR(100) NOT NULL,
    `surgeryType` VARCHAR(100) NOT NULL,
    `surgeryEmployee` VARCHAR(100) NOT NULL,
    `surgeryPatient` VARCHAR(100) NOT NULL,
    `surgeryContent` VARCHAR(100) NOT NULL,
    `surgeryResult` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`surgeryIdx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cooperation` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `patientIdx` INTEGER NOT NULL,
    `cooperationDate` TIMESTAMP(0) NOT NULL,
    `cooperationTime` VARCHAR(100) NOT NULL,
    `cooperationContent` VARCHAR(100) NOT NULL,
    `cooperationEmployee` VARCHAR(100) NOT NULL,
    `cooperationResult` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrnOrder` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `patientIdx` INTEGER NOT NULL,
    `prnOrderDate` TIMESTAMP(0) NOT NULL,
    `prnOrderTime` VARCHAR(100) NOT NULL,
    `prnOrderContent` VARCHAR(100) NOT NULL,
    `prnOrderEmployee` VARCHAR(100) NOT NULL,
    `prnOrderResult` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MorseFallScale` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `patientIdx` INTEGER NOT NULL,
    `patientRoomNumber` VARCHAR(100) NOT NULL,
    `patientName` VARCHAR(100) NOT NULL,
    `patientGender` VARCHAR(100) NOT NULL,
    `patientDateOfBirth` VARCHAR(100) NOT NULL,
    `fallHistoryFor3Months` VARCHAR(100) NOT NULL,
    `secondaryDiagnosis` VARCHAR(100) NOT NULL,
    `ambulatoryAid` VARCHAR(100) NOT NULL,
    `intravenousTherapy` VARCHAR(100) NOT NULL,
    `gait` VARCHAR(100) NOT NULL,
    `mentalStatus` VARCHAR(100) NOT NULL,
    `fallRiskFactors` VARCHAR(100) NOT NULL,
    `totalScore` VARCHAR(100) NOT NULL,
    `riskLevel` VARCHAR(100) NOT NULL,
    `riskLevelColor` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BradenScale` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `patientIdx` INTEGER NOT NULL,
    `patientRoomNumber` VARCHAR(100) NOT NULL,
    `patientName` VARCHAR(100) NOT NULL,
    `patientGender` VARCHAR(100) NOT NULL,
    `patientDateOfBirth` VARCHAR(100) NOT NULL,
    `sensoryPerception` VARCHAR(100) NOT NULL,
    `moisture` VARCHAR(100) NOT NULL,
    `activity` VARCHAR(100) NOT NULL,
    `mobility` VARCHAR(100) NOT NULL,
    `nutrition` VARCHAR(100) NOT NULL,
    `frictionAndShear` VARCHAR(100) NOT NULL,
    `totalScore` VARCHAR(100) NOT NULL,
    `riskLevel` VARCHAR(100) NOT NULL,
    `riskLevelColor` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NumericPainRatingScale` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `patientIdx` INTEGER NOT NULL,
    `patientRoomNumber` VARCHAR(100) NOT NULL,
    `patientName` VARCHAR(100) NOT NULL,
    `patientGender` VARCHAR(100) NOT NULL,
    `patientDateOfBirth` VARCHAR(100) NOT NULL,
    `painLocation` VARCHAR(100) NOT NULL,
    `painCause` VARCHAR(100) NOT NULL,
    `painScore` VARCHAR(100) NOT NULL,
    `painLevel` VARCHAR(100) NOT NULL,
    `painLevelColor` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MMSE` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `patientIdx` INTEGER NOT NULL,
    `patientRoomNumber` VARCHAR(100) NOT NULL,
    `patientName` VARCHAR(100) NOT NULL,
    `patientGender` VARCHAR(100) NOT NULL,
    `patientDateOfBirth` VARCHAR(100) NOT NULL,
    `orientationToTime` VARCHAR(100) NOT NULL,
    `orientationToPlace` VARCHAR(100) NOT NULL,
    `registration` VARCHAR(100) NOT NULL,
    `attentionAndCalculation` VARCHAR(100) NOT NULL,
    `recall` VARCHAR(100) NOT NULL,
    `language` VARCHAR(100) NOT NULL,
    `visualConstruction` VARCHAR(100) NOT NULL,
    `totalScore` VARCHAR(100) NOT NULL,
    `cognitiveImpairment` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicationRecord` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `patientIdx` INTEGER NOT NULL,
    `medicationDate` TIMESTAMP(0) NOT NULL,
    `medicationTime` VARCHAR(100) NOT NULL,
    `medicationName` VARCHAR(100) NOT NULL,
    `medicationDose` VARCHAR(100) NOT NULL,
    `medicationEmployee` VARCHAR(100) NOT NULL,
    `medicationResult` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NursingHistory` ADD CONSTRAINT `NursingHistory_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NursingPlan` ADD CONSTRAINT `NursingPlan_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NursingSurvey` ADD CONSTRAINT `NursingSurvey_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurgeryRegister` ADD CONSTRAINT `SurgeryRegister_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cooperation` ADD CONSTRAINT `Cooperation_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrnOrder` ADD CONSTRAINT `PrnOrder_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MorseFallScale` ADD CONSTRAINT `MorseFallScale_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BradenScale` ADD CONSTRAINT `BradenScale_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NumericPainRatingScale` ADD CONSTRAINT `NumericPainRatingScale_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MMSE` ADD CONSTRAINT `MMSE_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicationRecord` ADD CONSTRAINT `MedicationRecord_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;
