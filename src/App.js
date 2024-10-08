import HeroSection from './componentes/HeroSection';
import Apresentacao from './componentes/Apresentacao';
import Funcionalidades from './componentes/Funcionalidades';
import Depoimentos from './componentes/Depoimentos';
import Contato from './componentes/Contato';
import Rodape from './componentes/Rodape';
import Menu from './componentes/Menu';
import Receitas from './componentes/Receitas';
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <HeroSection />
      <Apresentacao />
      <Funcionalidades />
      <Receitas />
      <Depoimentos />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
