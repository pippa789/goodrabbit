import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Studio from './pages/Studio'
import Rooms from './pages/Rooms';

       
function App() {
  return (
  <>
    <Router>
      <NavBar />
      <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/Studio" element = {<Studio />} />
          <Route exact path = "/Contact" element = {<Contact />} />
          <Route exact path = "/Rooms" element = {<Rooms />} />
        </Routes>
      </Router>
    </>  
  )
}

export default App;
