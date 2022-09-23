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
  const adminUser = {
    name: 'admin',
    password: 'admin123'
  }
  const [user, setUser] = useState({name:"", password:""});
  const [error, setError] = useState("")
  const [authenticated, setAuth] = useState(false)

/*     fetch("/login")
        .then(res => res.json().then(data => {
          console.log(data.express)
        })) */
  
  const Auth = details => {

  }      
  const Login = details => {
    console.log(details)
    if(details.name === adminUser.name && details.password === adminUser.password){
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
        <Route index element={<LoginPage Login={Login} error={error}/>}></Route>
        <Route path="/register" element={<RegisterPage Auth={Auth} error={error}/>}></Route>     
        <Route path="/show" element={<ShowPlayer/>}></Route>
        <Route path="/create" element={<CreatePlayer/>}></Route>
        <Route path="/talents" element={<Talents/>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
