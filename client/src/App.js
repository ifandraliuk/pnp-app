//import './App.css';
import React, {useState} from 'react';
//import 'react-toastify/dist/ReactTostify.css'
import Container from 'react-bootstrap/esm/Container';
import LoginPage from './pages/LoginPage';
import ShowPlayer from './pages/ShowPlayer';
import { Routes, Route} from 'react-router-dom';
import CreatePlayer from './pages/CreatePlayer';
import Talents from './pages/Talents';
import RegisterPage from './pages/RegisterPage';


function App() {

  return (
    <Container className=""> 
      <Routes>
      <Route index element={<LoginPage/>}></Route>
        <Route path= "/" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>     
        <Route path="/player" element={<ShowPlayer/>}></Route>
        <Route path="/create" element={<CreatePlayer/>}></Route>
        <Route path="/talents" element={<Talents/>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
