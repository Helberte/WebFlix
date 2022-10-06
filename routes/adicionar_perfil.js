const adicionar_perfil = require('../controllers/adicionar_perfil_Controller');
const express = require('express');
const router = express.Router();

router.get('/adicionarperfil', adicionar_perfil.adicionarperfil);

module.exports = router;