import React, {useEffect } from 'react'
import { Container, Spinner, Row, Col, ListGroup } from 'react-bootstrap';
import {useSelector} from 'react-redux';

function GeneralFull({general}) {
    const {age, haircolor, sex, eyecolor, origin, more, haircut} = general
    const {user} = useSelector((state=>state.auth))

  return (
    <Container className='border-bottom border-top border-dark m-2'>
        <h4>Allgemeines</h4>
        <ListGroup className="m-2" horizontal>
            <ListGroup.Item name="name" disabled>Name: {user.name}</ListGroup.Item>
            <ListGroup.Item name="haircolor">Alter: {age}</ListGroup.Item>
            <ListGroup.Item name="age">Haarfarbe: {haircolor}</ListGroup.Item>
            <ListGroup.Item name="haircolor">Geschlecht: {sex}</ListGroup.Item>
            <ListGroup.Item name="age">Augenfarbe: {eyecolor}</ListGroup.Item>
            <ListGroup.Item name="haircolor">Herkunft: {origin}</ListGroup.Item>
            {more &&<ListGroup.Item name="age">Besondere Merkmale: {more}</ListGroup.Item>}
            <ListGroup.Item name="haircolor">Frisur: {haircut}</ListGroup.Item>
        </ListGroup>
    </Container>
  )
}

export default GeneralFull