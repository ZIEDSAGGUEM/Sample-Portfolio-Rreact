import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import './App.css'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      

      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       </Routes>
      <Footer/>
</BrowserRouter>      
    </div>
  )
}

export default App
