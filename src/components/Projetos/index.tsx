import Link from 'next/link';
import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({project}) {
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
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
      </section>
      {project &&
        project.map(item => (
          <ProjetoItem
            key={item.title}
            title={item.title}
            slug={item.title}
            img={item.imgUrl}
            type="website"
          />
        ))}
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
