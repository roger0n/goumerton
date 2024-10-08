import React, { useState } from 'react';
import styled from 'styled-components';


const ContatoContainer = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  text-align: center;
`;

const ContatoTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  resize: none;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533d;
  }
`;

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
  };

  return (
    <ContatoContainer id='contato'>
      <ContatoTitle>Entre em contato</ContatoTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </ContatoContainer>
  );
};

export default Contato;
