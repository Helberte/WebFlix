const express = require('express');
const router = express.Router();

router.get('/formapagamento',(req, res) => {
  res.render('escolha_como_pagar');
});

module.exports = router;