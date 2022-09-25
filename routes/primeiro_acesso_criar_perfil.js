const express = require('express');
const router = express.Router();


router.get('/criarperfilprimeiroacesso',(req, res) => {
  res.render('primeiro_acesso_criar_perfil');
});

module.exports = router;