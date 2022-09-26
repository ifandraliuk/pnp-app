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
import {getGeneral, reset} from '../features/general/GeneralSlice';
import { getAttributes, reset as attrReset} from '../features/attributes/attrSlice';

function ShowPlayer() {
  const {user} = useSelector((state)=>state.auth)
  const {general, isLoading, isError, message} = useSelector((state)=>state.general)
  const {attributes} = useSelector((state)=> state.attributes)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=> {
    if(!user) {
      navigate("/")
    }
    if(isError){
      console.log(message)
    }
    dispatch(getGeneral())
    dispatch(getAttributes())
    // Dismount general info
     return () => {
      dispatch(reset())
      dispatch(attrReset())
    } 
  }, [user, navigate, isError, dispatch, message])

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <Container>
      <NavbarComp />
    <Row className="m-2">
      <Col xxl={3} className="d-flex flex-column bd-highlight mb-3"><Row><Figure><Figure.Image src="rogue-f.jpg"></Figure.Image></Figure></Row><Row><Bars attr={attributes}/></Row></Col>
      <Col xxl={3}>{attributes.vitality >0 ? (<AttributesFull attr={attributes}/>): (<Attributes/>) }</Col>
      <Col>Fertigkeiten</Col>
    </Row>
    <Row className="m-2">
      <Col className="bg-light">Waffen</Col>
      <Col>Talente</Col>
    </Row>
    <Row className="m-2">
      <Col>Ausgerüstete Gegenstände</Col>
      <Col>Inventar</Col>
    </Row>
    <Row>{general.age !== 0 ? (<GeneralFull general={general}/>
    
    ) : (<GeneralItem/>)}</Row>
    
  </Container>
  )
}

export default ShowPlayer