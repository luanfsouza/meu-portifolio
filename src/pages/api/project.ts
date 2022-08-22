export default async (req, res) => {
  const params = req.query.id

//  title = 'ee';
//  type = 'd';
//  imgUrl = '/img1.jpg';


  const projects = [
    {
      title: 'projeto-01',
      type: 'website',
      imgUrl: '/project-01.png',
      descricao: {
        desc: 'meu site mais bonito'
      }
    },
    {
      title: 'projeto-02',
      type: 'website',
      imgUrl: '/project-02.png',
      descricao: {
        desc: 'meu site mais bonito'
      }
    },
    {
      title: 'projeto-03',
      type: 'website',
      imgUrl: '/project03.png',
      descricao: {
        desc: 'meu site mais bonito'
      }
    }
  ];
  try{
    res.status(200).send(projects)
  }
catch(err){
    res.send(err)
}


};
