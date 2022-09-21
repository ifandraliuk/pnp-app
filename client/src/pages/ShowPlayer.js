import React from 'react'
import Button from 'react-bootstrap/Button'

function ShowPlayer({user, Logout}) {
  return (
    <div className="welcome">
    <h2>Willkommen, <span>{user.name}</span></h2>
    <Button variant="secondary" onClick={Logout}>Ausloggen</Button>
  </div>
  )
}

export default ShowPlayer