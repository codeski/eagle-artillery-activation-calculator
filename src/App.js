import './App.css';
import Calculator from './components/calculator'
import Armies from './components/armies'
import NavBar from './components/navBar'

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
    <div className="App">
        
      <Router>
        <NavBar />
        
          <Routes>
            <Route exact path="/" element={<Calculator />} />
            <Route path="/armies" element={<Armies />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

