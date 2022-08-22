export default async (req, res) => {
  const params = req.query.id

//  title = 'ee';
//  type = 'd';
//  imgUrl = '/img1.jpg';


  const projects = [
    {
      title: 'projeto-01',
      type: 'website',
      imgUrl: '/project01.png',
      descricao:
        'Woman HQ Ecommerce é onde voçê pode achar toda e qualquer historia em quadrino/manga feminino, normalmente é mais dificil achar esse tipo de conteudo entâo, porque nâo reuni-lo em um só lugar?',
      site: 'https://woman-hq-ecommerce.vercel.app'
    },
    {
      title: 'projeto-02',
      type: 'website',
      imgUrl: '/project02.png',
      descricao:
        'Costs é um site feito facilitar a vida das pessoas em questão financeira. Sinta-se livre para organizar seus projetos pessoais/profissionais.',
      site: 'https://costs-weld.vercel.app'
    },
    {
      title: 'projeto-03',
      type: 'website',
      imgUrl: '/project03.png',
      descricao:
        'Rede social feita com React JS, utulizando o banco de dados MongoDB juntamente com Node JS no backend',
      site: 'https://react-social-media-black.vercel.app'
    }
  ];
  try{
    res.status(200).send(projects)
  }
catch(err){
    res.send(err)
}


};
