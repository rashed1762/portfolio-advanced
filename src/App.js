import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navcomp from './pages/shared/Navcomp';
import About from './pages/about/About';
import Service from './pages/service/Service';
import Portfolios from './pages/Porfolio/Portfolios';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navcomp></Navcomp>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/portfolio' element={<Portfolios></Portfolios>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
       
      </Routes>
      
    </div>
  );
}

export default App;
