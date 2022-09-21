const express = require('express');
const router = express.Router();

router.get('/criarsenha',(req, res) => {
  res.render('criar_senha');
});

module.exports = router;