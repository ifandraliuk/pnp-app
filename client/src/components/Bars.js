import React , {useState, useEffect} from 'react'
import { ButtonGroup, Container } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


function Bars({attr, id, abilities}) {
    const [curr, setCurr] = useState({vitality: attr.vitality*10, stamina: attr.stamina*10, mana: attr.mana*10, spirit:attr.spirit*10})
    const [percentage, setPercentage] = useState({v:100, st: 100, m:100, sp:100})
    const {vitality, stamina, mana, spirit} = curr
    //const {damage, setDamage} = useState(0)
    const [damage, setDamage] = useState({type: 'ausdauer', val: 0})

    useEffect(()=> {
      console.log("useeffect active")
      if(damage.type === 'vitalität'){
        let val = vitality/attr.vitality*10
        if(val <= 100 && val>0){
            setPercentage((prev)=> ({
              ...prev,
              v: val
          }))
        }
    }
    if (damage.type === 'ausdauer' || damage.type === "stamina"){
        let val = stamina/attr.stamina*10
        if(val <= 100 && val>0){
          setPercentage((prev)=> ({
            ...prev,
            st: val
        }))
      }        
    } else if (abilities && id >0 && abilities[id].type === 'stamina'){
      console.log('stamina')
    }
    }, [damage, curr])


    const onChange = e => {

      setDamage((prev)=> ({
        ...prev,
        [e.target.name]: e.target.value
    }))
    }

    useEffect(()=>{
      if(id >= 0){
        console.log(abilities[id])
        let val
        if(abilities[id].type === "stamina"){
          val = stamina - abilities[id].price
          setCurr((prev)=> ({
            ...prev,
            [abilities[id].type]: val
        }))
        let perc = stamina/attr.stamina*10
        if(val <= 100 && val>0){
          setPercentage((prev)=> ({
            ...prev,
            st: perc
        }))
      }       
        }  
        console.log()
      }
    },[abilities[id], id])


    const handleSubmit = e => {
      e.preventDefault()
      console.log(damage)
      if(damage.type === 'vitalität'){
          let val = vitality - damage.val
          if(val <= attr.vitality*10 && val>0){
              setCurr((prev)=> ({
                ...prev,
                vitality: val
            }))
          }
      } else if (damage.type === 'ausdauer'){
          let val = stamina - damage.val
          if(val <= attr.stamina*10 && val>0){
              setCurr((prev)=> ({
                ...prev,
                stamina: val
            }))
        }        
      }
      }

    const onReset = () => {
      setCurr({vitality: attr.vitality*10, stamina: attr.stamina*10, mana: attr.mana*10, spirit:attr.spirit*10})
      setDamage({type: "ausdauer", val: 0})
      setPercentage({v:100, st: 100, m:100, sp:100})
    }
  return (
   <Container className="border-top border-secondary">                       
    <Form onSubmit={handleSubmit}>
    <Form.Label as="h6">Werteeingabe</Form.Label>
    <Row className="mb-2">
      <Col>
        <Form.Group>
        <Form.Select className="text-capitalize" value={damage.type} name="type" onChange={onChange}>
        {attr.stamina > 0 && <option>ausdauer</option>}
        {attr.vitality > 0 &&<option>vitalität</option>}
        {attr.mana > 0 && <option>mana</option>}
        {attr.spirit > 0 && <option>spirituelle kraft</option>}
          </Form.Select></Form.Group>
        </Col>
      <Col><Form.Control type="number" name="val" value={damage.val} onChange={onChange}></Form.Control></Col>
      <Col><ButtonGroup><Button variant="secondary" type="submit" onClick={handleSubmit}>Berechnen</Button><Button variant="outline-secondary" type="reset" onClick={onReset}>Voll</Button></ButtonGroup></Col>
    
    </Row>
    </Form>
   {attr.vitality > 0 && <ProgressBar name ="vitality" label={`Trefferpunkte ${vitality} von ${attr.vitality*10}`} variant="danger"  now={percentage.v} />}
    {attr.stamina > 0 && <ProgressBar name ="stamina" label={`Ausdauer ${stamina} von ${attr.stamina*10}`} variant="warning"  now={percentage.st} />}
    {attr.mana > 0 && <ProgressBar name ="mana" label={`Mana ${attr.mana*10} von ${attr.mana*10}`} now={percentage.m} />}
    {attr.spirit > 0 && <ProgressBar name ="spirit" label={`Spirituele Kraft ${attr.spirit*10} von ${attr.spirit*10}`} variant="info"  now={percentage.sp} />}

   </Container>
  )
}

export default Bars