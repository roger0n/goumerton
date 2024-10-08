import styled from 'styled-components';
import carlos from '../imagens/carlos.png'
import maria from '../imagens/maria.png';
import ana from '../imagens/ana.png';

const DepoimentosContainer = styled.section`
  padding: 30px 20px;
  background-color: #f9f9f9;
  text-align: center;

  @media (min-width: 768px) {
    padding: 50px 40px;
  }

  @media (min-width: 1024px) {
    padding: 70px 60px;
  }
`;

const DepoimentosTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;

   @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const DepoimentosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
`;

const DepoimentoItem = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: left;

  @media (min-width: 768px) {
    max-width: 250px;
  }

  @media (min-width: 1024px) {
    max-width: 300px;
  }
`;

const ClienteFoto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;

   @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

const ClienteNome = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const ClienteDepoimento = styled.p`
  font-size: 1rem;
  color: #555;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Depoimentos = () => {
  return (
    <DepoimentosContainer id='depoimentos'>
      <DepoimentosTitle>O que nossos clientes estão dizendo</DepoimentosTitle>
      <DepoimentosWrapper>
        <DepoimentoItem>
          <ClienteFoto src={maria} alt="Maria" />
          <ClienteNome>Maria Oliveira</ClienteNome>
          <ClienteDepoimento>O GourmetOn transformou a forma como faço pedidos de comida. A entrega é rápida e a variedade de restaurantes é incrível!</ClienteDepoimento>
        </DepoimentoItem>
        <DepoimentoItem>
          <ClienteFoto src={carlos} alt="Carlos" />
          <ClienteNome>Carlos Souza</ClienteNome>
          <ClienteDepoimento>Eu adoro a interface simples e o pagamento é super fácil. Recomendo para todos!</ClienteDepoimento>
        </DepoimentoItem>
        <DepoimentoItem>
          <ClienteFoto src={ana} alt="Ana" />
          <ClienteNome>Ana Pereira</ClienteNome>
          <ClienteDepoimento>Excelente serviço! O atendimento ao cliente é fantástico e eu nunca tive problemas com meus pedidos.</ClienteDepoimento>
        </DepoimentoItem>
      </DepoimentosWrapper>
    </DepoimentosContainer>
  );
};

export default Depoimentos;
