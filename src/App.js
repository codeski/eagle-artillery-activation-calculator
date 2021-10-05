// import logo from './logo.svg';
import './App.css';
import Troops from './components/troops'
import Title from './components/title'
import Spells from './components/spells'
import EagleLvl from './components/eaglelvl'
// import Totals from './components/totals'
import Heros from './components/heros'
import SeigeMachines from './components/seigeMachines'

function App() {
  return (
    <div>
      <Title />
      <EagleLvl />
      <Troops />
      <SeigeMachines />
      <Heros />
      <Spells /> 
      
    </div>
  );
}

export default App;
