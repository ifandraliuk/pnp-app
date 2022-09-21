//import './App.css';
import React, {useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from './pages/LoginForm';
import Button from 'react-bootstrap/Button'
import ShowPlayer from './pages/ShowPlayer';
import { Routes, Route, Redirect } from 'react-router-dom';
import CreatePlayer from './pages/CreatePlayer';
import Talents from './pages/Talents';
import './App.css'


function App() {
  const adminUser = {
    name: 'admin',
    password: 'admin123'
  }
  const [user, setUser] = useState({name:"", password:""});
  const [error, setError] = useState("")
  const [authenticated, setAuth] = useState(false)
  const Login = details => {
    console.log(details)
    if(details.name == adminUser.name && details.password == adminUser.password){
      setAuth(true)
      console.log("Logged in as admin")
      setUser({
        name: details.name,
        password: details.password
      })

      console.log(authenticated)

    } else{
      setError("Falsche Eingabe!")
      console.log("Details don't match")
      setAuth(false)
    }
  }
  const Logout = () => {
    console.log("Logout")
    setUser({name:"", password:""})
    setAuth(false)
  }

  return (
    <Container className=""> 
      <Routes>
      {(authenticated) ? (
        <Route index element={<ShowPlayer user={user} Logout={Logout}/>}></Route>): 
        <Route index element={<LoginForm Login={Login} error={error}/>}></Route>}       
         <Route path="/show" element={<ShowPlayer/>}></Route>
        <Route path="/create" element={<CreatePlayer/>}></Route>
        <Route path="/talents" element={<Talents/>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
