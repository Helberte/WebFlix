-- CreateTable
CREATE TABLE `perfil_assiste_filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_filmes_id` INTEGER NOT NULL,
    `fk_perfil_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `perfil_assiste_filme` ADD CONSTRAINT `perfil_assiste_filme_fk_filmes_id_fkey` FOREIGN KEY (`fk_filmes_id`) REFERENCES `Filme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `perfil_assiste_filme` ADD CONSTRAINT `perfil_assiste_filme_fk_perfil_id_fkey` FOREIGN KEY (`fk_perfil_id`) REFERENCES `Perfil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
