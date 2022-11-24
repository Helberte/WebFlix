/*
  Warnings:

  - Added the required column `fk_plano_id` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `fk_plano_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_fk_plano_id_fkey` FOREIGN KEY (`fk_plano_id`) REFERENCES `planos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
