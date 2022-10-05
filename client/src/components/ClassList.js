import React, {useState} from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Bar from './Bar';

function ClassList({userclass, attr}) {
  const abilities = userclass.abilities
  const [damage, setDamage] = useState({type: 'ausdauer', val: 0})
  const [curr, setCurr] = useState({vitality: attr.vitality*10, stamina: attr.stamina*10, mana: attr.mana*10, spirit:attr.spirit*10})
  const spec = []
  const counts = {};
  let bar = Object.entries(attr).filter(el=>["vitality", "stamina", "mana", "spirit"].includes(el[0]) && el[1]>0)
  let renamedBar = []

  // change eng attr names to german
  bar.map((el) => {
    let name = el[0] === "vitality" ? "vitalität" 
    : el[0] === "stamina" ? "ausdauer"
    : el[0] === "spirit" ? "spirituelle kraft"
    : el[0]
    let val = el[1]
    return renamedBar.push([name, val])})
  renamedBar = Object.fromEntries(renamedBar)
  bar = Object.fromEntries(bar)
  // count the amount of cards for each specialization
  Object.keys(abilities).map((ind) => {
    return spec.push(abilities[ind].specialization)})
  spec.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });  


  const useAbility = e => {
    console.log("The button was pressed")
    const ability = abilities[e.target.name]
    const type = ability.type === "stamina" ? "ausdauer" 
    : ability.type === "spirit" ? "spirituele kraft" 
    : ability.type 
    setDamage((prev)=> ({
      ...prev,
      type: type,
      val: parseInt(ability.price)
    }))
    setCurr((prev)=> ({
      ...prev,
      [ability.type]: curr[ability.type] - damage.val > 0 ? curr[ability.type] - damage.val : 0
  }))
  }
  
  const onChange = e => {
    setDamage((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value
  }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    damage.type === "vitalität" ? setCurr((prev)=> ({...prev, vitality: curr.vitality - damage.val })) 
      : damage.type === "ausdauer" ? setCurr((prev)=> ({...prev, stamina: curr.stamina - damage.val}))
      : damage.type === "spirituele kraft" ? setCurr((prev)=> ({...prev, spirit: curr.spirit - damage.val}))
      : setCurr((prev)=> ({...prev, [damage.type]: curr[damage.type] - damage.val}))
    }
  const onReset = () => {
    setCurr({vitality: attr.vitality*10, stamina: attr.stamina*10, mana: attr.mana*10, spirit:attr.spirit*10})
    setDamage({type: "ausdauer", val: 0})
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
        <Form onSubmit={handleSubmit}>
    <Form.Label as="h6">Werteeingabe</Form.Label>
      <Row className="mb-2">
        <Col>
          <Form.Group>
          <Form.Select className="text-capitalize" value={damage.type} name="type" onChange={onChange}>
            {Object.keys(renamedBar).map((name)=>(
              <option key={name}>{name}</option>
            ))}
            </Form.Select>
          </Form.Group>
          </Col>
        <Col>
          <Form.Control type="number" name="val" value={damage.val} onChange={onChange}></Form.Control>
        </Col>
        <Col>
          <ButtonGroup>
            <Button variant="secondary" type="submit" onClick={handleSubmit}>Berechnen</Button>
            <Button variant="outline-secondary" type="reset" onClick={onReset}>Voll</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Form>
      {Object.keys(bar).map((name, i)=>(
        <Bar name={name} key={i} max={parseInt(attr[name]*10)} curr={curr[name]}/>
      ))}
    </Container>
  )
}

export default ClassList