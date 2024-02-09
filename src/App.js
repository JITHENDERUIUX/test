import logo from './logo.svg';
import './App.css';


import { Routes,Route } from 'react-router-dom';
import Navabr from './componemts/Navabr';
import Banner from './componemts/Banner';
import Home from './pages/Home';
import Footer from './componemts/Footer';
import Charm from './pages/Charm';
import Recently from './pages/Recently';
import Location from './pages/Location';
import Pagenotfound from './pages/Pagenotfound';

import { Modal } from 'bootstrap';


function App() {
  return (
    <>
    
    <Navabr/>
    
    <Routes>
    <Route  path="/" element={<Home/>}  />

      <Route  path="/home" element={<Home/>}  />
      <Route  path="/charm" element={<Charm/>}  />
      <Route  path="/recently" element={<Recently/>}  />
      <Route  path="/location" element={<Location/>}  />
      


      <Route  path="*" element={<Pagenotfound/>} >

      <Route  path=":jithu" element={<Pagenotfound/>}  />

        </Route>





    </Routes>

    <Footer/>
    
    </>
   
  )
}

export default App;
