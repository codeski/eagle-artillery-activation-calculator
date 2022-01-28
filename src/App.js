// import logo from './logo.svg';
import './App.css';
import Troops from './components/troops'
import SuperTroops from './components/superTroops'
import Title from './components/title'
import Spells from './components/spells'
import EagleLvl from './components/eaglelvl'
import Heros from './components/heros'
import SeigeMachines from './components/siegeMachines'
import SelectTitle from './components/selectTitle'
import HeroSiegeSpan from './components/herosSiegeSpan'

import { makeStyles } from '@material-ui/core/styles'
import { Gradient } from '@material-ui/icons';

const useStyles = makeStyles({  
  root: {
    backgroundColor: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

const changeBackgroundColor = (active) => {
  
}


function App() {


  return (
    <div className="App">
      <EagleLvl />
      <SelectTitle />
      <Troops />
      <HeroSiegeSpan />
      {/* <Heros />
      <SeigeMachines /> */}
      <Spells /> 
      <SuperTroops />
    </div>
  );
}

export default App;
