const express = require('express');
const router = express.Router();


router.get('/',  (req, res) => {
  res.render('index',{
    nome: 'Webflix'
  });
});

module.exports = router;