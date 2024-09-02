-- CreateTable
CREATE TABLE `Certification` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `emailcode` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employeeaccount` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phonenumber` VARCHAR(100) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `depart` VARCHAR(100) NOT NULL,
    `position` VARCHAR(100) NOT NULL,
    `dateofjoining` VARCHAR(100) NOT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Employeeaccount_id_key`(`id`),
    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patient` (
    `patientIdx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `dateOfBirth` VARCHAR(100) NOT NULL,
    `gender` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `ssn` VARCHAR(100) NOT NULL,
    `insuranceStatus` BOOLEAN NOT NULL,
    `occupation` VARCHAR(100) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `emergencyContactName` VARCHAR(100) NOT NULL,
    `emergencyContactPhone` VARCHAR(100) NOT NULL,
    `religion` VARCHAR(100) NOT NULL,
    `primaryPhysician` VARCHAR(100) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Patient_phone_key`(`phone`),
    UNIQUE INDEX `Patient_ssn_key`(`ssn`),
    PRIMARY KEY (`patientIdx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Insurance` (
    `patientIdx` INTEGER NOT NULL,
    `insuranceIdx` INTEGER NOT NULL AUTO_INCREMENT,
    `insuranceType` VARCHAR(100) NOT NULL,
    `insuranceCompany` VARCHAR(100) NOT NULL,
    `insuranceNumber` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`insuranceIdx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicalHistory` (
    `patientIdx` INTEGER NOT NULL,
    `medicalHistoryIdx` INTEGER NOT NULL AUTO_INCREMENT,
    `mainSymptoms` VARCHAR(100) NOT NULL,
    `pastMedicalHistory` VARCHAR(100) NOT NULL,
    `familyMedicalHistory` VARCHAR(100) NOT NULL,
    `mentalHealthStatus` VARCHAR(100) NOT NULL,
    `physicalHealthStatus` VARCHAR(100) NOT NULL,
    `previousTreatmentHistory` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`medicalHistoryIdx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LivingEnvironment` (
    `patientIdx` INTEGER NOT NULL,
    `livingEnvironmentIdx` INTEGER NOT NULL AUTO_INCREMENT,
    `livingEnvironment` VARCHAR(100) NOT NULL,
    `livingEnvironmentDetail` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`livingEnvironmentIdx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Insurance` ADD CONSTRAINT `Insurance_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalHistory` ADD CONSTRAINT `MedicalHistory_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LivingEnvironment` ADD CONSTRAINT `LivingEnvironment_patientIdx_fkey` FOREIGN KEY (`patientIdx`) REFERENCES `Patient`(`patientIdx`) ON DELETE RESTRICT ON UPDATE CASCADE;
