import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiSqlite } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Node" icon={<FaNode />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript/>} />
        <ConhecimentoItem title="MongoDb" icon={<SiMongodb/>} />
        <ConhecimentoItem title="MySQL" icon={<GrMysql/>} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
