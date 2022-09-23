import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Login({Login, error}) {
    const [details, setDetails] = useState({name:"", password:""})
    const handleSubmit = e => {
        e.preventDefault()
        Login(details)
    }
  return (
    <Container className="col-md-12 col-sm-12 col-lg-5 rounded mt-5 d-flex justify-content-center align-items-center bg-light">
        <Row className="p-4">
            <Col>
            <h4>Willkommen in Dragonlands!</h4>
                <Form className="">
                    <Form.Group className=''controlId='formName'>
                        <Form.Label>Gib deinen Namen ein</Form.Label>
                        <Form.Control type="text" placeholder='...' onChange={e=>setDetails({...details, name:e.target.value})} value={details.name}></Form.Control>
                    </Form.Group>
                    <Form.Group className=''controlId='formPassword'>
                        <Form.Label>Gib dein Passwort ein</Form.Label>
                        <Form.Control type="password" placeholder='...' onChange={e=>setDetails({...details, password:e.target.value})} value={details.password}></Form.Control>
                    </Form.Group>
                    <Button as={Link} to="/show" variant='primary mt-2 col-12' type="submit" onClick={handleSubmit}>Einloggen</Button>
                    <Button as={Link} to="/register" variant='outline-info mt-2 col-12'>Neuen Charakter erstellen</Button>
                </Form>
            </Col>
        </Row>
</Container>
 )
}

export default Login;