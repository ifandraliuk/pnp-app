import React from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
function AttributesFull({attr}) {
  let values = Object.values(attr)
  const attrKeys = Object.keys(attr)
  const AttributeNames = ['Stärke', 'Gechicklichkeit', 'Intelligenz', 'Vitalität', 'Ausdauer', 'Charisma', 'Mana', 'Spirituelle Kraft']
  return (
    <Container className='border-bottom border-top border-dark m-2'>
    <h4>Attribute</h4>
    <ListGroup className="m-2">
    {AttributeNames.map((key, i)=>(
      <ListGroup.Item key = {i} name={attrKeys[i]}>{`${AttributeNames[i]}: ${values[i]}`}</ListGroup.Item>
            ))
          }
        </ListGroup>
    </Container>
  
  )
}

export default AttributesFull