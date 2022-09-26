import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {createAttributes} from '../features/attributes/attrSlice'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
function Attributes() {
  const MAX = 70
  const AttributeNames = ['Stärke', 'Gechicklichkeit', 'Intelligenz', 'Vitalität', 'Ausdauer', 'Charisma', 'Mana', 'Spirituelle Kraft']
  const [attr, setAttr] = useState({strength: 0, dexterity:0, intelligent:0, vitality:0,stamina:0,charisma:0, mana:0, spirit: 0})
  const [pointsLeft, setPointsLeft] = useState(MAX)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // updating used points
  useEffect(() => {
    console.log(Object.values(attr))
    let val = Object.values(attr)
    console.log(val)
    console.log(typeof(attr.strength))
    let sumofAttr = 0
    val.forEach((el)=>{
      if(el != NaN){
        sumofAttr += el
      }
      
    })
    setPointsLeft(MAX - sumofAttr)
    console.log(sumofAttr)
    //setPointsLeft(MAX - sumofAttr)

}, [attr]) 

  const onChange = (e) => {
    if(e.target.value){
        setAttr((prev) =>({
          ...prev,
          [e.target.name]: parseInt(e.target.value)
      }
      ))
      console.log(`is valid ${e.target.value}`)
    }else {
      console.log(`is not valid ${e.target.value}`)
    }
  }

  const handleSubmit = e => {
    dispatch(createAttributes(attr))  
    //navigate('/player')
  } 
  return (
    <Container>
        <h4>Attribute {`(${pointsLeft})`}</h4>
        <Form onSubmit={handleSubmit}>
          {
            Object.keys(attr).map((key, i)=>(
              <Form.Group controlId={key} key={key}>
                <Form.Label>{AttributeNames[i]}</Form.Label>
                <Form.Control type="number" name={key}  value={attr[key]} onChange={onChange}/>
              </Form.Group>
            ))
          }
          {!pointsLeft && <Button className="mt-2" variant="dark"type="submit">Speichern</Button> }         
        </Form>
    </Container>
  )
}

export default Attributes