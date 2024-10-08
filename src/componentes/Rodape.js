import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const RodapeContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;

  @media (min-width: 768px) {
    padding: 30px 0;
  }

  @media (min-width: 1024px) {
    padding: 40px 0;
  }
`;

const RodapeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

   @media (min-width: 768px) {
    gap: 30px;
  }

  @media (min-width: 1024px) {
    gap: 40px;
  }
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const RodapeText = styled.p`
  font-size: 0.9rem;
  margin-top: 10px;

   @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

const Rodape = () => {
  return (
    <RodapeContainer>
      <RodapeWrapper>
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="https://instagram.com" target="_blank">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank">
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
        <RodapeText>&copy; 2024 GourmetOn. Todos os direitos reservados.</RodapeText>
        <RodapeText><a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Termos de Uso</a> | <a href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Política de Privacidade</a></RodapeText>
      </RodapeWrapper>
    </RodapeContainer>
  );
};

export default Rodape;
