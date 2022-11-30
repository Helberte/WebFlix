const express = require('express');
const router = express.Router();
const controller = require('../controllers/create_filme');
const upload = require('../middlewares/uploadImage');

router.post('/filme_create', upload.single('image') , controller.create)

module.exports = router;