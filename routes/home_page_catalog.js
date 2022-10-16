const express = require('express');
const router = express.Router();
const controller = require('../controllers/home_page_controller.js');

router.get('/homecatalog', controller.homePage);

module.exports = router;