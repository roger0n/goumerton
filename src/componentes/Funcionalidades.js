import styled from 'styled-components';
import { FaSearch, FaFilter, FaStar } from 'react-icons/fa';


const FuncionalidadesContainer = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  text-align: center;
`;

const FuncionalidadesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FuncionalidadesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const FuncionalidadeItem = styled.div`
  max-width: 300px;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #ff6347;
  margin-bottom: 1rem;
`;

const FuncionalidadeTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FuncionalidadeDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Funcionalidades = () => {
  return (
    <FuncionalidadesContainer>
      <FuncionalidadesTitle>Funcionalidades do GourmetOn</FuncionalidadesTitle>
      <FuncionalidadesWrapper>
        <FuncionalidadeItem>
          <IconWrapper><FaSearch /></IconWrapper>
          <FuncionalidadeTitle>Busca por Comidas</FuncionalidadeTitle>
          <FuncionalidadeDescription>Encontre rapidamente suas comidas favoritas utilizando nossa busca avançada.</FuncionalidadeDescription>
        </FuncionalidadeItem>
        <FuncionalidadeItem>
          <IconWrapper><FaFilter /></IconWrapper>
          <FuncionalidadeTitle>Filtros Personalizados</FuncionalidadeTitle>
          <FuncionalidadeDescription>Filtre resultados por tipo de comida, preço, avaliações e muito mais.</FuncionalidadeDescription>
        </FuncionalidadeItem>
        <FuncionalidadeItem>
          <IconWrapper><FaStar /></IconWrapper>
          <FuncionalidadeTitle>Avaliações de Clientes</FuncionalidadeTitle>
          <FuncionalidadeDescription>Veja as avaliações de outros clientes antes de fazer o seu pedido.</FuncionalidadeDescription>
        </FuncionalidadeItem>
      </FuncionalidadesWrapper>
    </FuncionalidadesContainer>
  );
};

export default Funcionalidades;
