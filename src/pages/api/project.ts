export default async (req, res) => {
  const params = req.query.id

//  title = 'ee';
//  type = 'd';
//  imgUrl = '/img1.jpg';


  const proojects = [
    {title: 'projeto01', type: 'website', imgUrl: '/img1.jpg'},
    {title: 'projeto02', type: 'website', imgUrl: '/hq1.jpg'},
    {title: 'projeto03', type: 'website', imgUrl: '/img1.jpg'},
    {title: 'projeto04', type: 'website', imgUrl: '/img1.jpg'},
  ]
  try{
    res.status(200).send(proojects)
  }
catch(err){
    res.send(err)
}


};
