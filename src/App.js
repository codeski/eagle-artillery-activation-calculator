// import logo from './logo.svg';
import './App.css';
import EagleLvl from './components/eaglelvl'
import SelectArmy from './components/selectArmy'

// import { makeStyles } from '@material-ui/core/styles'
// import { Gradient } from '@material-ui/icons';

// const useStyles = makeStyles({  
//   root: {
//     backgroundColor: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
//     border: 0,
//     borderRadius: 15,
//     color: 'white',
//     padding: '0 30px'
//   }
// })

function App() {


  return (
    <div className="App">
      <EagleLvl />
      <SelectArmy />
    </div>
  );
}

export default App;
