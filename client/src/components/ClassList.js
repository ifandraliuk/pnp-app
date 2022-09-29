import React from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ClassList({userclass}) {
  const abilities = userclass.abilities
  const spec = []
  const els = []
  let counts = 0
  console.log(spec)
  Object.keys(abilities).map((ind) => {
    return spec.includes(abilities[ind].specialization) ? '' : spec.push(abilities[ind].specialization)})
  //create check for 4 els - if 4 ? col-md-3 else col-md-4
  
    Object.keys(abilities).map((ind) => {
    if(abilities[ind].specialization === spec[0]){
      counts += 1
    } else {
          els[0] = counts
    }

  })
  console.log(els)
  return (
    <Container>
        <Tabs justify>
          {spec.map((el)=>(
            <Tab eventKey={el} title={el}>
              <Row className="mt-3">
                {Object.keys(abilities).map((ind)=>{                
                  return abilities[ind].specialization === el && (            
                <Col className="col-md-4" key={abilities[ind].name}>
                  <Card>
                    <Card.Header><h6>{abilities[ind].name}</h6></Card.Header>
                    <Card.Body>
                      <Row className="border-bottom p-2">{abilities[ind].description}</Row>
                      <Row className="border-bottom p-2"><Col>Typ: {abilities[ind].type}</Col><Col>Preis: {abilities[ind].price}</Col></Row>
                      <Row><Button size="sm" variant="outline-dark">Verwenden</Button></Row>
                    </Card.Body>    
                  </Card>
                </Col>
                )})}
            </Row>
            </Tab>
          ))}        
        </Tabs>

    </Container>
  )
}

export default ClassList