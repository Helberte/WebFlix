const express = require('express');
const router = express.Router();

router.get('/adicionarperfil',(req, res) => {
  res.render('adicionar_perfil');
});

module.exports = router;