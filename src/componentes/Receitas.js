import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const API_KEY = '86610b8bebcb4d63b823c4b692491bf7'; 

const SectionContainer = styled.section`
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 40px; /* Dá espaço entre o título e os cards */
  color: #333;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const ReceitasContainer = styled.section`
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const ReceitaCard = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const ReceitaImagem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ReceitaTitulo = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Receitas = () => {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=4&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setReceitas(data.recipes);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar receitas:', error);
        setLoading(false);
      }
    };
    fetchReceitas();
  }, []);

  return (
    <SectionContainer>
      <Title>Algumas Recomendações</Title>
      <ReceitasContainer>
        {loading ? (
          <p>Carregando receitas...</p>
        ) : (
          receitas.map((receita) => (
            <ReceitaCard key={receita.id}>
              <ReceitaImagem src={receita.image} alt={receita.title} />
              <ReceitaTitulo>{receita.title}</ReceitaTitulo>
              <p>Tempo de preparo: {receita.readyInMinutes} minutos</p>
            </ReceitaCard>
          ))
        )}
      </ReceitasContainer>
    </SectionContainer>
  );
};

export default Receitas;
