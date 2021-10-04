// import logo from './logo.svg';
import './App.css';
import Troops from './components/troops'
import Title from './components/title'
import Spells from './components/spells'
import EagleLvl from './components/eaglelvl'
import Activation from './components/activation'

function App() {
  return (
    <div>
      <Title />
      <Troops />
      <Spells /> 
      <EagleLvl />
      <Activation /> 
    </div>
  );
}

export default App;
