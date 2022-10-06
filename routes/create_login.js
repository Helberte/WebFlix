const express = require('express');
const router = express.Router();
const controller = require('../controllers/create_login_Controllers.js');

router.get('/', controller.index);
router.get('/configurarcartao', controller.config_cartao);
router.get('/configurar', controller.configurar);
router.get('/criarperfil', controller.criar_perfil);
router.get('/criarsenha', controller.criar_senha);
router.get('/escolhaseuplano', controller.escolha_seu_plano);
router.get('/formapagamento', controller.forma_pagamento);
router.get('/login', controller.login);
router.get('/planos', controller.planos);
router.get('/criarperfilprimeiroacesso', controller.primeiro_acesso_criar_perfil);


module.exports = router;