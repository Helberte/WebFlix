const express = require('express');
const router = express.Router();


router.get('/planos',(req, res) => {
  res.render('planos');
});

module.exports = router;