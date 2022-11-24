-- CreateTable
CREATE TABLE `elenco_participa_filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_elenco_id` INTEGER NOT NULL,
    `fk_filme_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `elenco_participa_filme` ADD CONSTRAINT `elenco_participa_filme_fk_elenco_id_fkey` FOREIGN KEY (`fk_elenco_id`) REFERENCES `Elenco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `elenco_participa_filme` ADD CONSTRAINT `elenco_participa_filme_fk_filme_id_fkey` FOREIGN KEY (`fk_filme_id`) REFERENCES `Filme`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
