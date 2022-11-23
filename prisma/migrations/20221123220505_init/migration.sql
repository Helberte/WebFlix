-- CreateTable
CREATE TABLE `Filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(1000) NOT NULL,
    `subtitulo` VARCHAR(1000) NULL,
    `sinopse` VARCHAR(1000) NULL,
    `imagem_capa` VARCHAR(1000) NOT NULL,
    `duracao` VARCHAR(20) NOT NULL,
    `faixa_idade` VARCHAR(20) NOT NULL,
    `ano` VARCHAR(10) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
