-- CreateTable
CREATE TABLE `Cartao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(15) NOT NULL,
    `primeiro_nome` VARCHAR(500) NOT NULL,
    `sobrenome` VARCHAR(600) NOT NULL,
    `data_expiracao` VARCHAR(10) NOT NULL,
    `codigo_seguranca` VARCHAR(10) NOT NULL,
    `fk_usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cartao` ADD CONSTRAINT `Cartao_fk_usuario_id_fkey` FOREIGN KEY (`fk_usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
