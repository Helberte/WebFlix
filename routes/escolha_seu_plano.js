const express = require('express');
const router = express.Router();


router.get('/escolhaseuplano',(req, res) => {
  res.render('escolha_seu_plano');
});

module.exports = router;