const express = require('express');
const router = express.Router();

router.get('/adicionarperfil',(req, res) => {
  res.render('adicionar_perfil');
});
const adicionar_perfil = require('../controllers/adicionar_perfil_Controller');
router.get('/adicionarperfil', adicionar_perfil.adicionarperfil);

module.exports = router;