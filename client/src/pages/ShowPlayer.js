import React, { Fragment, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap';

import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GeneralItem from '../components/GeneralItem';
import NavbarComp from '../components/Navbar';
import {getGeneral, reset} from '../features/general/GeneralSlice'

function ShowPlayer() {
  const {user} = useSelector((state)=>state.auth)
  const {general, isLoading, isError, message} = useSelector((state)=>state.general)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=> {
    if(!user) {
      navigate("/")
    }
    if(isError){
      console.log(message)
    }
    dispatch(getGeneral())
    console.log(general.age)
    // Dismount general info
     return () => {
      dispatch(reset())
    } 
  }, [user, navigate, isError, dispatch, message])

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <Container>
      <NavbarComp />
    <h2>Willkommen <span>{user ? user.name :"Freund!" }</span></h2>
    {general.age > 1 ? (<><h4>Found data! Age: {general.age}</h4></>) : (<Fragment><h4>Du hast noch keine allgemeine Informationen eingetragen</h4><GeneralItem/></Fragment>)}
  </Container>
  )
}

export default ShowPlayer