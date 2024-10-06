import styled from 'styled-components';


const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://link-da-imagem-de-fundo.com'); // Coloque aqui o link da imagem desejada
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const HeroButton = styled.a`
  padding: 1rem 2rem;
  background-color: #ff6347;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533d;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>GourmetOn</HeroTitle>
      <HeroDescription>O seu app de delivery de comida com entrega rápida e uma grande variedade de restaurantes!</HeroDescription>
      <HeroButton href="#download">Baixe agora</HeroButton>
    </HeroContainer>
  );
};

export default HeroSection;
