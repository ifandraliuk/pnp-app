import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bars from './Bars';

function ClassList({userclass, attr}) {
  const abilities = userclass.abilities
  const spec = []
  const els = []
  const counts = {};
  const [id, setId] = useState(-1)
  Object.keys(abilities).map((ind) => {
    return spec.push(abilities[ind].specialization)})
  spec.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });  
  //create check for 4 els - if 4 ? col-md-3 else col-md-4
  
  const useAbility = e => {
    console.log(e.target.name)
    setId(e.target.name)
  }
  
  return (
    <Container>
        <Tabs justify>
          {Object.keys(counts).map((el)=>(
            <Tab eventKey={el} title={el} key={el}>
              <Row className="mt-3 mb-2">
                {Object.keys(abilities).map((ind)=>{                
                  return abilities[ind].specialization === el && (            
                <Col className={counts[el] > 3 ? 'col-md-3 col-12': 'col-md-4 col-12'} key={abilities[ind].name}>
                  <Card className='h-100' >
                    <Card.Header as="h6">{abilities[ind].name}</Card.Header>
                    <Card.Body className="d-flex-column">
                      <Row className="border-bottom p-2">{abilities[ind].description}</Row>
                      <Row className=""><Col>Typ: {abilities[ind].type}</Col><Col>Preis: {abilities[ind].price}</Col></Row>
                      <Row className="justify-content-end"><Button size="sm" variant="outline-dark" name={ind} onClick={useAbility}>Verwenden</Button></Row>
                    </Card.Body>    
                  </Card>
                </Col>
                )})}
            </Row>
            </Tab>
          ))}        
        </Tabs>
        <Row className="">{attr && <Bars attr={attr} id={id} abilities={abilities}/>}</Row>
    </Container>
  )
}

export default ClassList