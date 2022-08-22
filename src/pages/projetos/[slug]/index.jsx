/* eslint-disable @typescript-eslint/no-shadow */
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import LoadingScreen from '../../../components/LoadingScreen';
// import { setgid } from 'process';

export default function Projeto({ post, dados }) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }
  // interface BannerProjetoProps1 {
  //   title: string;
  //   type: string;
  //   imgUrl: string;
  //   descricao: string;
  // }
  // interface BannerProjetoProps2 {
  //   descricao: string
  //   desc: string
  // }
  const [data, setData] = useState(dados);
  const [dataD, setDatad] = useState(data.descricao);
  useEffect(() => {
    const fds = async () => {
      setData(dados.filter(i => i.title === router.query.slug)[0]);
      setDatad(dados.filter(i => i.title === router.query.slug)[0].descricao);
    };
    fds();
  }, []);
  console.log(data.descricao)
  return (
    <ProjetoContainer>
      {/* <Head>
        <title>{projeto.title} | Meu portfólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>

      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      /> */}
      <BannerProjeto title={data.title} type={data.type} imgUrl={data.imgUrl} />
      <main>
        {data && <p>{data.type}</p>}

        

        <button type="button">
          <a href={data.site}>
            Ver projeto online
          </a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'projeto-01' } },
      { params: { slug: 'projeto-02' } },
      { params: { slug: 'projeto-03' } },
    ],
    fallback: true // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const vercel = await fetch(
    'https://meu-portifolio-theta.vercel.app/api/project'
  );
  const data = await vercel.json();
  const dataUnica = data;
  return {
    props: { post: {}, dados: dataUnica },
    revalidate: 60 * 60 * 24
  };
}