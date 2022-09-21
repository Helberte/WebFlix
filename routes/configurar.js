const express = require('express');
const router = express.Router();


router.get('/configurar',(req, res) => {
  res.render('configurar');
});

module.exports = router;