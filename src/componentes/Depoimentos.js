import styled from 'styled-components';

const DepoimentosContainer = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const DepoimentosTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const DepoimentosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const DepoimentoItem = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: left;
`;

const ClienteFoto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ClienteNome = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ClienteDepoimento = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Depoimentos = () => {
  return (
    <DepoimentosContainer>
      <DepoimentosTitle>O que nossos clientes estão dizendo</DepoimentosTitle>
      <DepoimentosWrapper>
        <DepoimentoItem>
          <ClienteFoto src="https://via.placeholder.com/60" alt="Cliente 1" />
          <ClienteNome>Maria Oliveira</ClienteNome>
          <ClienteDepoimento>O GourmetOn transformou a forma como faço pedidos de comida. A entrega é rápida e a variedade de restaurantes é incrível!</ClienteDepoimento>
        </DepoimentoItem>
        <DepoimentoItem>
          <ClienteFoto src="https://via.placeholder.com/60" alt="Cliente 2" />
          <ClienteNome>João Souza</ClienteNome>
          <ClienteDepoimento>Eu adoro a interface simples e o pagamento é super fácil. Recomendo para todos!</ClienteDepoimento>
        </DepoimentoItem>
        <DepoimentoItem>
          <ClienteFoto src="https://via.placeholder.com/60" alt="Cliente 3" />
          <ClienteNome>Ana Pereira</ClienteNome>
          <ClienteDepoimento>Excelente serviço! O atendimento ao cliente é fantástico e eu nunca tive problemas com meus pedidos.</ClienteDepoimento>
        </DepoimentoItem>
      </DepoimentosWrapper>
    </DepoimentosContainer>
  );
};

export default Depoimentos;
