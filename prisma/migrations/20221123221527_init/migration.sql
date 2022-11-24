-- CreateTable
CREATE TABLE `planos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resolucao` VARCHAR(100) NOT NULL,
    `qualidade_video` VARCHAR(100) NOT NULL,
    `acessibilidade` VARCHAR(100) NULL,
    `preco` DECIMAL(65, 30) NOT NULL,
    `nome` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
