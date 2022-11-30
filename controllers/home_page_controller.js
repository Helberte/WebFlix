const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();





function homePage(req, res){





  res.render('home_page_catalog');
}

module.exports = { homePage };