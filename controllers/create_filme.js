
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



async function create(req, res){

  const {
    titulo,
    subtitulo,
    sinopse,
    duracao,
    idade,
    ano,
    nome_image
  } = req.body;

  const resul = await prisma.filme.create({
    data: {
      titulo: titulo,
      subtitulo: subtitulo,
      imagem_capa: nome_image,
      sinopse: sinopse,
      duracao: duracao,
      faixa_idade: idade,
      ano: ano
    }
  });

  res.redirect('/homecatalog');
}


module.exports = { create }