
import './App.css';
import Counter from './components/Counter';
import Home from './components/Home';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
                <Routes>
                  <Route path="/About" element={<About/>}></Route>
                  <Route path="/Counter" element={<Counter/>}></Route>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/Projects" element={<Projects/>}></Route>
                  <Route path="/Contact" element={<Contact/>}></Route>
                </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;




