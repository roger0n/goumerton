import styled from 'styled-components';
import { FaShippingFast, FaUtensils, FaMoneyBillWave } from 'react-icons/fa';


const ApresentacaoContainer = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const ApresentacaoTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const BeneficiosContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const BeneficioItem = styled.div`
  max-width: 300px;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #ff6347;
  margin-bottom: 1rem;
`;

const BeneficioTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BeneficioDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Apresentacao = () => {
  return (
    <ApresentacaoContainer>
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
