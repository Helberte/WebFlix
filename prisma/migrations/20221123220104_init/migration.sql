-- CreateTable
CREATE TABLE `Elenco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(300) NOT NULL,
    `sobrenome` VARCHAR(300) NULL,
    `foto` VARCHAR(1000) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
