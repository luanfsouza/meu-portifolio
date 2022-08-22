import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Projeto from '../../components/Projetos/index';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({dados}) {
  // const [data, setData] = useState(undefined);
  // const [dataQuery, setDataQuery] = useState();
  // useEffect(() => {
  //   const fds = async () => {
  //     const vai = await fetch('http://localhost:3000/api/project');
  //     const json = await vai.json();
  //     setData(json);
  //   };
  //   fds();
  // }, []);

  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />
      <main className="container">
        {dados &&
          dados.map(item => (
            <ProjetoItem
              key={item.title}
              title={item.title}
              slug={item.title}
              imgUrl={item.imgUrl}
              type="website"
            />
          ))}
       
      </main>
    </ProjetosContainer>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const vercel = await fetch(
    'https://meu-portifolio-theta.vercel.app/api/project'
  );
  const data = await vercel.json();
  return {
    props: { dados: data },
    revalidate: 60 * 60 * 24
  };
};

    

