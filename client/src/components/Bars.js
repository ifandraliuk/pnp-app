import React , {useState} from 'react'
import { Container } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
function Bars({attr}) {
    //const [points, setPoints] = useState({life: 0, stamina: 0, mana: 0, spirit:0})
    //const {life, stamina, mana, spirit} = points
    //const {damage, setDamage} = useState(0)
    
  return (
   <Container>
    <Row>
      <Col> {attr.vitality > 0 && <ProgressBar name ="life" label={`Trefferpunkte ${attr.vitality*10} von ${attr.vitality*10}`} variant="danger"  now={100} />}</Col>
    </Row>
   
    {attr.stamina > 0 && <ProgressBar name ="stamina" label={`Ausdauer ${attr.stamina*10} von ${attr.stamina*10}`} variant="warning"  now={100} />}
    {attr.mana > 0 && <ProgressBar name ="mana" label={`Mana ${attr.mana*10} von ${attr.mana*10}`} now={100} />}
    {attr.spirit > 0 && <ProgressBar name ="spirit" label={`Spirituele Kraft ${attr.spirit*10} von ${attr.spirit*10}`} variant="info"  now={100} />}
   </Container>
  )
}

export default Bars