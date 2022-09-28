import React, { useEffect } from 'react';
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GeneralItem from '../components/GeneralItem';
import GeneralFull from '../components/GeneralFull';
import AttributesFull from '../components/AttributesFull';
import Attributes from '../components/Attributes';
import Bars from '../components/Bars'
import NavbarComp from '../components/Navbar';
import { getPlayer, reset } from '../features/player/playerSlice';
import ClassList from '../components/ClassList';
import ChooseClass from '../components/ChooseClass';


function ShowPlayer() {
  const {user} = useSelector((state)=>state.auth)
  const {player, isLoading, isError, message} = useSelector((state)=>state.player)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=> {
    if(!user) {
      navigate("/")
    }
    if(isError){
      console.log(message)
    }
    dispatch(getPlayer())
    // Dismount general info
     return () => {
      dispatch(reset())
    } 
  }, [user, navigate, isError, dispatch, message])

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <Container>
      <NavbarComp />
    <Row className="m-2">
      <Col xxl={3} className="d-flex flex-column bd-highlight mb-3"><Row><Figure><Figure.Image src="rogue-f.jpg"></Figure.Image></Figure></Row><Row>{player && player.attributes && <Bars attr={player.attributes}/>}</Row></Col>
      <Col xxl={3}>{player && player.attributes ? (<AttributesFull attr={player.attributes}/>): (<Attributes/>) }</Col>
      <Col>{
        player && player.userclass ? (<ClassList userclass={player.userclass}/>) : (<ChooseClass/>)
      }
      </Col>
    </Row>
    <Row className="m-2">
      <Col className="bg-light">Waffen</Col>
      <Col>Talente</Col>
    </Row>
    <Row className="m-2">
      <Col>Ausgerüstete Gegenstände</Col>
      <Col>Inventar</Col>
    </Row>
    <Row>{player && player.general ? (<GeneralFull general={player.general}/>
    
    ) : (<GeneralItem/>)}</Row>
    
  </Container>
  )
}

export default ShowPlayer