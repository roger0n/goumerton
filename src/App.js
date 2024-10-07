import HeroSection from './componentes/HeroSection';
import Apresentacao from './componentes/Apresentacao';
import Funcionalidades from './componentes/Funcionalidades';
import Depoimentos from './componentes/Depoimentos';
import Contato from './componentes/Contato';
import Rodape from './componentes/Rodape';
import './App.css';

function App() {
  return (
    <div>
      <HeroSection />
      <Apresentacao />
      <Funcionalidades />
      <Depoimentos />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
