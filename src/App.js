
import './App.css';
import React, {useState} from 'react';
import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";
import NavBar from './Components/NavBar'
import Footer from './Components/Footer';
import SideBar from './Components/sideBar';
import {Home, Exchanges, CryptoCurrency, News, Error, CryptoDetails} from './Components'

function App() {
  const [toggle, setToggle] = useState(false)

  const getToggle = () => {
    setToggle(!toggle)
  }
  return (
    
      <BrowserRouter>
        <NavBar isOpen = {getToggle} />
       
        <SideBar isOpen = {getToggle} toggle = {toggle}/>
        
        
        
            <Routes>
              
              <Route path = '/' element = {<Home/>}/>
              <Route path = 'Crypto' element = {<CryptoCurrency/>}/>
              <Route path = 'Exchanges' element = {<Exchanges/>}/>
              <Route path  = 'News' element = {<News/>}/>
              <Route path = '/Crypto/:coinId' element = {<CryptoDetails/>}/>
              <Route path  = '*' element = {<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
     
    
  );
}

export default App;
