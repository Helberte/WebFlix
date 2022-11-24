-- CreateTable
CREATE TABLE `cenas_momentos_filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_cenas_momentos_id` INTEGER NOT NULL,
    `fk_filmes_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cenas_momentos_filme` ADD CONSTRAINT `cenas_momentos_filme_fk_cenas_momentos_id_fkey` FOREIGN KEY (`fk_cenas_momentos_id`) REFERENCES `cenas_momentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cenas_momentos_filme` ADD CONSTRAINT `cenas_momentos_filme_fk_filmes_id_fkey` FOREIGN KEY (`fk_filmes_id`) REFERENCES `Filme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
