// Packages
import React, { useEffect, useState } from 'react'
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
    <div>
      <h2>Signup</h2>
      <span className="red">{message}</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input name="firstname" placeholder="Your first name" onChange={e => setFirstname(e.target.value)} />
        </div>
        <div>
          <label>Last Name: </label>
          <input name="lastname" placeholder="Your last name" onChange={e => setLastname(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>GA Location: </label>
          <input name="galocation" onChange={e => setGaLocation(e.target.value)} />
        </div>
        <div>
          <label>GA Course: </label>
          <input name="gacourse" onChange={e => setGaCourse(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Me Up!</button>
      </form>
    </div>
  )
}

export default Signup
