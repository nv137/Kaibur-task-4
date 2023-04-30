import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import DeleteObject from './endpoints/DeleteObject';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddObject from './endpoints/AddObject';
import FindStringObject from './endpoints/FindStringObject';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/addobj" element={<AddObject/>}></Route>
      <Route exact path="/delobj" element={<DeleteObject/>}></Route>
      <Route exact path="/findobj" element={<FindStringObject/>}></Route>
      </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
