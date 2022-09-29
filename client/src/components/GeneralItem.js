import React, {useState} from 'react'
import { Container} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import {createGeneral} from '../features/player/playerSlice'
import Button from 'react-bootstrap/Button'

function GeneralItem() {
    const [mainInfos, setMainInfos] = useState({
        age: 0, haircolor: '', sex:'männlich', eyecolor: '', origin: '', more: '', haircut: '', kind: 'Mensch'
    })
    const {age, haircolor, sex, eyecolor, origin, more, haircut, kind} = mainInfos
    const dispatch = useDispatch()
    const onChange = (e) => {
        setMainInfos((prev) =>({
            ...prev,
            [e.target.name]: e.target.value
        }
        ))
    }
    const onKind = e => {
        setMainInfos((prev)=> ({
            ...prev,
            kind: e.target.id
        }))
    }

    const handleSubmit = e => {
        dispatch(createGeneral(mainInfos))
    }
  return (
    <Container>
        <Row>
            <Col className="border-red col-8">
                <h4>Allgemeines</h4>
                <Form onSubmit={handleSubmit}>
                    <Row>
                    <Form.Group as={Col} controlId="kind">
                            <Form.Label>Art</Form.Label>
                            <Form.Select name="kind" value={kind} onChange={onKind}>
                                <option>Mensch</option>
                                <option>Zwerg</option>
                                <option>Elb</option>
                                <option>Ork</option>
                                <option>Halbling</option>
                                <option>Gnom</option>
                                <option>Kobold</option>
                            </Form.Select>
                        </Form.Group> 
                        <Form.Group as={Col} controlId="age">
                            <Form.Label>Alter</Form.Label>
                            <Form.Control type="number" name="age" value={age} onChange={onChange} placeholder="..."/>
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="haircolor">
                            <Form.Label>Haarfarbe</Form.Label>
                            <Form.Control type="text" name="haircolor" value={haircolor} onChange={onChange}placeholder="..."/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="sex">
                            <Form.Label>Geschlecht</Form.Label>
                            <Form.Select name="sex" value={sex} onChange={onChange}>
                                <option>männlich</option>
                                <option>weiblich</option>
                            </Form.Select>
                        </Form.Group>                        
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="eyes">
                            <Form.Label>Augenfarbe</Form.Label>
                            <Form.Control type="text" name="eyecolor" value={eyecolor} onChange={onChange}placeholder="..."/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="origin">
                            <Form.Label>Herkunft</Form.Label>
                            <Form.Control name="origin" value={origin} onChange={onChange} placeholder="..."/>
                        </Form.Group>                        
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="more">
                            <Form.Label>Besondere Merkmale</Form.Label>
                            <Form.Control type="text" name="more" value={more} onChange={onChange} placeholder="..."/>
                    </Form.Group>
                        <Form.Group as={Col} controlId="haircut">
                            <Form.Label>Frisur</Form.Label>
                            <Form.Control name="haircut" value={haircut} onChange={onChange} placeholder="..."/>
                        </Form.Group> 
                    </Row>
                    {age > 1 && kind && <Button className="mt-3  justify-content-end" variant="dark" type="submit">Speichern</Button>} 
                    </Form>
                </Col>
            </Row> 
    </Container>
  )
}

export default GeneralItem