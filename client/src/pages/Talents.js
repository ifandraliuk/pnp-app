import React, {useEffect, useState} from 'react'
import NavbarComp from '../components/Navbar'
import { Container, Spinner, } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTalent, reset } from '../features/talent/talentSlice';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


function Talents() {
  const {user} = useSelector((state)=>state.auth)
  const {player} = useSelector((state)=>state.player)
  const {talent, isLoading, isError, message} = useSelector((state)=>state.talents)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const categories = []
  const els = {}
  //find all categories from dB
  Object.keys(talent).map((ind) => {
    return categories.push(talent[ind].category)})  
  // count amount of els in each category
  categories.forEach(function (x) { els[x] = (els[x] || 0) + 1; }); 
  const sorted = Object.fromEntries(
    Object.entries(els).sort(([,a],[,b]) => parseInt(b)-parseInt(a))
);
//console.log(player)
//console.log(player.talents['0'].points)
  useEffect(()=> {
    if(!user) {
      navigate("/")
    }
    if(isError){
      console.log(message)
    }
    dispatch(getTalent())
    // Dismount general info
     return () => {
      dispatch(reset())
    } 
  }, [user, navigate, isError, dispatch, message])


  if(isLoading){
    return <Spinner/>
  }
  return (
    <Container fluid>
        <NavbarComp/>
        <Row>
          <h5>Erlernte Tallente</h5>
          {player.talents ? (<>{}</>) : (<>Du hast noch keine Talente...</>)}
        </Row>
        <Row>
          <h5>Alle Tallente</h5>
          {Object.keys(sorted).map((el)=>(
            <Col className="col-md-4 col-12" key={el}>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{el}</th>
                    <th>Würfel</th>
                    <th>Werte</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(talent).map((ind)=>{
                    return talent[ind].category === el && (
                  <tr key={ind}>
                    <td>#</td>
                    <td>{talent[ind].name}</td>
                    <td>{talent[ind].dice}</td>
                    <td>var</td>
                  </tr>
                  )})}
                </tbody>
              </Table>
              </Col>
          ))}
        </Row>
    </Container>
    
  )
}

export default Talents