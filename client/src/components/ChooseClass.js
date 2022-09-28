import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addClass } from '../features/player/playerSlice';

function ChooseClass() {
    const AllClasses = ['Waffenschmied', 'Schildwache', 'Waldläufer', 
    'Assasine', 'Magier', 'Druide', 'Monk', 'Kleriker']
    const [name, setType] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = e => {
        dispatch(addClass({name}))
    }
  return (
    <Container>
        <h4>Klasse</h4>
        <Form onSubmit={handleSubmit}>
            {AllClasses.map((type) => (
                <div key={`${type}`} className="mb-3">
                    <Form.Check 
                        type="radio"
                        id={`${type}`}
                        name="class-names"
                        label={`${type}`}
                        onChange={e=>{setType(e.target.id)}}
                    />
                </div>
            ))}
            {name && <Button className="mt-3  justify-content-end" variant="dark" type="submit">Speichern</Button>} 
        </Form>
    </Container>
  )
}

export default ChooseClass