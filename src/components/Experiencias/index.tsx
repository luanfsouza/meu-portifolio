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

      <section className="revelacao">
        <ExperienciaItem
          year="2020"
          title="Curso tercnico"
          description="Completei o curso técnico de ti da microlins, onde tive meu primeiro contado com computadores e sistemas no geral."
        />
        <ExperienciaItem
          year="2022"
          title="Densenvolvedor-web"
          description="Me introduzir no mundo da programação de forma autodidata."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
