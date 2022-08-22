/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillMail
} from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
    // onClick={() => handleRedirect('https://twitter.com')}
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <a href="https://github.com/luanfsouza" target='_blanck'>
            <AiOutlineGithub />
          </a>

          <a href="https://www.linkedin.com/in/luan-ferreira-6b4a25181/" target='_blanck'>
            <AiFillLinkedin />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5577981451593&text=Oie%2C%20vamos%20trocar%20uma%20ideia!" target='_blanck'>
            <IoLogoWhatsapp />
          </a>
          <a href="https://is.gd/ltuM33" target='_blanck'>
            <MdEmail />
          </a>
        </section>
      </div>
    </Container>
  );
}

export default Footer;
