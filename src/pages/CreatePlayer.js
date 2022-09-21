import React from 'react'
import { Container } from 'react-bootstrap'
import CharacterSheet from '../components/CharacterSheet'
import NavbarComp from '../components/Navbar'
function CreatePlayer() {
  return (
    <Container>
        <NavbarComp/>
        <CharacterSheet />
    </Container>
  )
}

export default CreatePlayer