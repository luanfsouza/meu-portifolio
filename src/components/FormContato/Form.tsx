import { useState } from 'react';
// import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);
  return (
    <FormContainer
      data-aos="fade-up"
      action="https://formsubmit.co/luanferreira7777@gmail.com"
      method="POST"
    >
      <Input
        placeholder="Nome"
        value={nome}
        name="name"
        required
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        name="email"
        required
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        required
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
      <Input type="hidden" value="Novo Contato" name="_subject" />
      <Input type="text" style={{ display: 'none' }} name="_honey" />
      <Input type="hidden" name="_captcha" value="false" />
      <Input
        type="hidden"
        name="_next"
        value="https://meu-portifolio-theta.vercel.app/"
      />
    </FormContainer>
  );
}
