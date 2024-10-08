import styled from 'styled-components';



const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('./banner_goumerton.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: red;
  text-align: center;

  /* Ajuste para tablets */
  @media (min-width: 768px) {
    height: 90vh; 
    padding: 40px;
  }

  /* Ajuste para desktops */
  @media (min-width: 1024px) {
    height: 100vh;
    padding: 60px;
  }
`;

const HeroTextWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8); 
  padding: 15px;
  border-radius: 10px;

   @media (min-width: 768px) {
    padding: 25px; 
  }

  @media (min-width: 1024px) {
    padding: 35px; 
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem; 
  }

  @media (min-width: 1024px) {
    font-size: 4rem; 
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  max-width: 100%;

  @media (min-width: 768px) {
    font-size: 1.4rem; 
    margin-bottom: 2rem;
    max-width: 80%; 
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem; 
    max-width: 600px; 
  }
`;

const HeroButton = styled.a`
  padding: 0.8rem 1.5rem;
  background-color: #ff6347;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5533d;
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem; /* Botão maior em tablets */
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    padding: 1.2rem 2.5rem; /* Botão maior ainda em desktops */
    font-size: 1.4rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id='hero'>
      <HeroTextWrapper>
        <HeroTitle>GourmetOn</HeroTitle>
        <HeroDescription>O seu app de delivery de comida com entrega rápida e uma grande variedade de restaurantes!</HeroDescription>
        <HeroButton href="#download">Baixe agora</HeroButton>
      </HeroTextWrapper>    
    </HeroContainer>
  );
};

export default HeroSection;
