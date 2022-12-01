const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();





async function homePage(req, res){

  // pega todas as categorias
  const categorias = await prisma.genero.findMany();
  

  // seleciona todos os filmes com o nome da categoria de cada um 
  const filmes = await prisma.filme.findMany({
    include: {
      genero_filme: {
        include:{
          genero: {
            select:{
              nome: true,
            },
          },
        },
      },
    },
  });

  res.render('home_page_catalog', { filmes, categorias });
}

module.exports = { homePage };