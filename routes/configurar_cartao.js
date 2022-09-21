const express = require('express');
const router = express.Router();


router.get('/configurarcartao',(req, res) => {
  res.render('configurar_cartao');
});

module.exports = router;