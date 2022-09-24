import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register, reset} from '../features/auth/AuthSlice'
import Spinner from 'react-bootstrap/Spinner';

function RegisterPage({Auth, error}) {
    const [formData, setFormData] = useState({name:"", pwd:"", check:""})
    const {name, pwd, check} = formData
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, msg} = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(isError) {
            toast.error(msg)
        }
        if(isSuccess || user) {
            navigate('/player')
        }
        // Set everything to false
        dispatch(reset())
    }, [user, isError, isSuccess, msg, navigate, dispatch])
    const onChange = (e) => {
        setFormData((prev) =>({
            ...prev,
            [e.target.name]: e.target.value
        }
        ))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(pwd !== check) {
            toast.error('Passwörter sind nicht gleich')
        } else {
            const userData = {
                name,
                pwd,
                check
            }
            dispatch(register(userData))
        }
        Auth(formData)
    }

    if(isLoading){
        return <Spinner/>
    }

  return (
    <Container className="col-md-12 col-sm-12 col-lg-5 rounded mt-5 d-flex justify-content-center align-items-center bg-light">
        <Row className="p-4">
            <Col>
            <h4>Willkommen in Dragonlands!</h4>
                <Form className="">
                    <Form.Group className=''controlId='formName'>
                        <Form.Label>Gib deinen Namen ein</Form.Label>
                        <Form.Control type="text" name="name" placeholder='...' onChange={onChange} value={name}></Form.Control>
                    </Form.Group>
                    <Form.Group className=''controlId='formPassword'>
                        <Form.Label>Gib dein Passwort ein</Form.Label>
                        <Form.Control type="password" name="pwd" placeholder='...' onChange={onChange} value={pwd}></Form.Control>
                    </Form.Group>
                    <Form.Group className=''controlId='formCheck'>
                        <Form.Label>Wiederhole dein Passwort</Form.Label>
                        <Form.Control type="password" name="check" placeholder='...' onChange={onChange} value={check}></Form.Control>
                    </Form.Group>
                    <Button variant='primary mt-2 col-12' type="submit" onClick={handleSubmit}>Registrieren</Button>
                    <Button as={Link} to="/" variant='outline-secondary mt-2 col-12'>Zurück</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default RegisterPage