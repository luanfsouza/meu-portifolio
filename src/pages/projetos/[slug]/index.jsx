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

export default function Projeto() {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  const [data, setData] = useState(false);
  const [dataQuery, setDataQuery] = useState();
  useEffect(() => {
    const fds = async ()=> {
       const vai = await  fetch('http://localhost:3000/api/project')
       const json = await vai.json()
       setData(json.filter(i=>i.title === router.query.slug)[0])
    }
  fds()
      
  }, []);
  // const esperaca = async () => {
  //   const fds = await fetch('http://localhost:3000/api/project');
  //   const json = await fds.json();

  // };c
  // const fds = data.filter(i => i.title === router.query.slug);

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
        <p>ddw{}</p>

        <button type="button">
          <a href="https://github.com/luanfsouza" target="_blanck">
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
      { params: { slug: 'projeto01' } },
     { params: { slug: 'projeto02' } },
     { params: { slug: 'projeto03' } },
     { params: { slug: 'projeto05' } },
    ],
    fallback: true, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}
