const express = require('express');
const router = express.Router();

router.get('/criarperfil',(req, res) => {
  res.render('criar_perfil');
});

module.exports = router;