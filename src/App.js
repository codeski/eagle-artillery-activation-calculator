// import logo from './logo.svg';
import './App.css';
import Troops from './components/troops'
import SuperTroops from './components/superTroops'
import Title from './components/title'
import Spells from './components/spells'
import EagleLvl from './components/eaglelvl'
import Totals from './components/chosenTroops'
import Heros from './components/heros'
import SeigeMachines from './components/siegeMachines'

function App() {
  return (
    <div>
      <Title />
      <EagleLvl />
      <Troops />
      <SuperTroops />
      <SeigeMachines />
      <Heros />
      <Spells /> 
      <Totals />
    </div>
  );
}

export default App;
