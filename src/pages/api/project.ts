export default async (req, res) => {
  const params = req.query.id

//  title = 'ee';
//  type = 'd';
//  imgUrl = '/img1.jpg';


  const projects = [
    { title: 'projeto01', type: 'website', imgUrl: '/projetct01.png' },
    { title: 'projeto02', type: 'website', imgUrl: '/projetct02.png' },
    { title: 'projeto03', type: 'website', imgUrl: '/projetct03.png' }
  ];
  try{
    res.status(200).send(projects)
  }
catch(err){
    res.send(err)
}


};
