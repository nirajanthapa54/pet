import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import About from './componets/About';
import Collection from './componets/Collection';
import Home from './componets/Home';
import Navbar from './componets/Navbar';

const App=()=> {
  return (
    <div>
<Router>
    
    <Navbar />    
     <Routes>
    
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/service" element={<Collection/>} />
      

     
      </Routes>
  


 

</Router>

    </div>
  );
}

export default App;
