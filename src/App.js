// import logo from './logo.svg';
import './App.css';
// import EagleLvl from './components/eaglelvl'
// import SelectArmy from './components/selectArmy'
import Calculator from './components/calculator'
import Armies from './components/armies'
import NavBar from './components/navBar'
import NoMatch from './components/noMatch'

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom"

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

// import { fetchArmies } from './actions'



function App() {

  // useEffect (() => {
  //     fetchArmies()
  // }, [])

  // const dispatch = useDispatch()

  return (
    <div className="App">
      <Router>
        <NavBar /> 
          <Routes>
            <Route exact path="/" element={<Calculator />} />
            <Route path="/armies" element={<Armies />} />
            {/* <Route path="" element={<NoMatch />} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;

