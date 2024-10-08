import styled from 'styled-components';
import { FaShippingFast, FaUtensils, FaMoneyBillWave } from 'react-icons/fa';


const ApresentacaoContainer = styled.section`
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

const ApresentacaoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const BeneficiosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
`;

const BeneficioItem = styled.div`
  max-width: 300px;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #ff6347;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const BeneficioTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const BeneficioDescription = styled.p`
  font-size: 1rem;
  color: #555;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const Apresentacao = () => {
  return (
    <ApresentacaoContainer id='apresentacao'>
      <ApresentacaoTitle>Por que escolher o GourmetOn?</ApresentacaoTitle>
      <BeneficiosContainer>
        <BeneficioItem>
          <IconWrapper><FaShippingFast /></IconWrapper>
          <BeneficioTitle>Entrega Rápida</BeneficioTitle>
          <BeneficioDescription>Receba sua comida de forma rápida e eficiente diretamente na sua porta.</BeneficioDescription>
        </BeneficioItem>
        <BeneficioItem>
          <IconWrapper><FaUtensils /></IconWrapper>
          <BeneficioTitle>Variedade de Restaurantes</BeneficioTitle>
          <BeneficioDescription>Escolha entre uma ampla variedade de restaurantes para todos os gostos.</BeneficioDescription>
        </BeneficioItem>
        <BeneficioItem>
          <IconWrapper><FaMoneyBillWave /></IconWrapper>
          <BeneficioTitle>Pagamento Fácil</BeneficioTitle>
          <BeneficioDescription>Utilize métodos de pagamento simples e seguros diretamente pelo app.</BeneficioDescription>
        </BeneficioItem>
      </BeneficiosContainer>
    </ApresentacaoContainer>
  );
};

export default Apresentacao;
