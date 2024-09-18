export default async (req, res) => {
  const params = req.query.id

//  title = 'ee';
//  type = 'd';
//  imgUrl = '/img1.jpg';


  const projects = [
    {
      title: 'projeto-01',
      type: 'website',
      imgUrl: '/ps-store.png',
      descricao:
        'Este projeto Angular tem como objetivo criar uma simulação da PlayStation Store, utilizando a abordagem de componentes atômicos para construir uma interface de usuário modular e reutilizável. Essa estratégia permite que os componentes sejam quebrados em partes menores e independentes, facilitando a manutenção e a escalabilidade do projeto.',
      site: 'https://playstation-store-sand.vercel.app/'
    },
    {
      title: 'projeto-02',
      type: 'website',
      imgUrl: '/buzz-feed.png',
      descricao:
        'BuzzFeed Angular: Um quiz simples criado em Angular que determina se o usuário seria um super-herói, baseado em suas respostas. Utiliza um JSON como banco de dados para armazenar as perguntas e respostas.',
      site: 'https://buzz-feed-nu.vercel.app/'
    },
    {
      title: 'projeto-03',
      type: 'website',
      imgUrl: '/project02.png',
      descricao:
        'Costs é um site feito facilitar a vida das pessoas em questão financeira. Sinta-se livre para organizar seus projetos pessoais/profissionais.',
      site: 'https://costs-weld.vercel.app'
    },
  ];
  try{
    res.status(200).send(projects)
  }
catch(err){
    res.send(err)
}


};
