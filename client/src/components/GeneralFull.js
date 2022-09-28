import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';
import {useSelector} from 'react-redux';

function GeneralFull({general}) {
    const {age, haircolor, sex, eyecolor,kind, origin, more, haircut} = general
    const {user} = useSelector((state=>state.auth))

  return (
    <Container className='border-bottom border-top border-dark m-2'>
        <h4>Allgemeines</h4>
        <ListGroup className="m-2" horizontal>
            <ListGroup.Item name="name" disabled>Name: {user.name}</ListGroup.Item>
            <ListGroup.Item name="kind" >Art: {kind}</ListGroup.Item>
            <ListGroup.Item name="age">Alter: {age}</ListGroup.Item>
            <ListGroup.Item name="haircolor">Haarfarbe: {haircolor}</ListGroup.Item>
            <ListGroup.Item name="sex">Geschlecht: {sex}</ListGroup.Item>
            <ListGroup.Item name="age">Augenfarbe: {eyecolor}</ListGroup.Item>
            <ListGroup.Item name="origin">Herkunft: {origin}</ListGroup.Item>
            {more &&<ListGroup.Item name="more">Besondere Merkmale: {more}</ListGroup.Item>}
            <ListGroup.Item name="haircut">Frisur: {haircut}</ListGroup.Item>
        </ListGroup>
    </Container>
  )
}

export default GeneralFull