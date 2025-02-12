import logo from './logo.svg';
import './App.css';
import{Routes,Route} from "react-router-dom"
import Nav from './compontents/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
//import Video from './pages/Video';


function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/about"element={<About/>}/>
            <Route path="/contact"element={<Contact/>}/>
        </Routes>
        
        
      
    </div>
  );
}

export default App;
