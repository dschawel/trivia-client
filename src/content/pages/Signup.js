// Packages
import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'

const Signup = props => {
  // Declare and initialize state variables
  let [email, setEmail] = useState('')
  let [firstname, setFirstname] = useState('')
  let [lastname, setLastname] = useState('')
  let [message, setMessage] = useState('')
  let [password, setPassword] = useState('')
  let [galocation, setGaLocation] = useState('')
  let [gacourse, setGaCourse] = useState('')

  // Set message to blank if I'm typing in the form
  useEffect(() => {
    setMessage('')
  }, [firstname, lastname, email, password, galocation, gacourse])

  const handleSubmit = e => {
    // Prevent default of form submissions
    e.preventDefault()

    // Form the data object 
    let data = {
      email,
      firstname,
      lastname,
      password,
      galocation,
      gacourse
    }
    
    // Send the user sign up data to the server
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      response.json().then(result => {
        if (response.ok) {
          // I have a token - update the user information
          props.updateUser(result.token)
        }
        else {
          // Status was something other than 200
          setMessage(`${response.status} ${response.statusText}: ${result.message}`)
        }
      })
    })
    .catch(err => {
      console.log('Error', err)
      setMessage(`Error! ${err.toString()}`)
    })
  }

  // Redirect if there is already someone logged in
  if (props.user) {
    return <Redirect to="/profile" />
  }

  return (
    <div className="signup">
      <h2>Signup</h2>
      <span className="red">{message}</span>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First Name: </Label>
          <Input name="firstname" onChange={e => setFirstname(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name: </Label>
          <Input name="lastname" onChange={e => setLastname(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Email: </Label>
          <Input type="email" name="email" onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>GA Location: </Label>
          <Input name="galocation" placeholder="SEA, LA" onChange={e => setGaLocation(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>GA Course: </Label>
          <Input name="gacourse" placeholder="SEI28, UX30" onChange={e => setGaCourse(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Password: </Label>
          <Input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <Button type="submit" color="info">Sign Me Up!</Button>
      </Form>
    </div>
  )
}

export default Signup
