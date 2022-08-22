import Head from 'next/head';
import sr from 'scrollreveal'
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <Head>
        <script src="https://unpkg.com/scrollreveal"></script>
      </Head>
      <SectionTitle title="01 Ano" description="de experiência" />

      <section className='revelacao'>
        <ExperienciaItem
          year="2018"
          title="Dev Front-end"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem 
          year="2021"
          title="Dev Front-sasend"
          description="Lorem ipsum sss dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Frondsa dsa t-end"
          description="Lorem idsadas psum dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2020"
          title="Dev Front-end"
          description="Lorem ipsumdsada  dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
