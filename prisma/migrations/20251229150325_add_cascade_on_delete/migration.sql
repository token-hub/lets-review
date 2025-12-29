-- DropForeignKey
ALTER TABLE `ProgressAnswer` DROP FOREIGN KEY `ProgressAnswer_progressId_fkey`;

-- DropIndex
DROP INDEX `ProgressAnswer_progressId_fkey` ON `ProgressAnswer`;

-- AddForeignKey
ALTER TABLE `ProgressAnswer` ADD CONSTRAINT `ProgressAnswer_progressId_fkey` FOREIGN KEY (`progressId`) REFERENCES `Progress`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
