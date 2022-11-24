-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_fk_plano_id_fkey`;

-- AlterTable
ALTER TABLE `usuario` MODIFY `fk_plano_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_fk_plano_id_fkey` FOREIGN KEY (`fk_plano_id`) REFERENCES `planos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
