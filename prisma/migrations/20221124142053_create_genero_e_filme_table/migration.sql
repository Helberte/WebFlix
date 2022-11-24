-- CreateTable
CREATE TABLE `genero_e_filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_genero_id` INTEGER NOT NULL,
    `fk_filme_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `genero_e_filme` ADD CONSTRAINT `genero_e_filme_fk_genero_id_fkey` FOREIGN KEY (`fk_genero_id`) REFERENCES `Genero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `genero_e_filme` ADD CONSTRAINT `genero_e_filme_fk_filme_id_fkey` FOREIGN KEY (`fk_filme_id`) REFERENCES `Filme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
