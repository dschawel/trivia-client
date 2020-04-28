import React, {useState, useEffect } from 'react'
import { Table } from 'reactstrap';

const Home = props => {
  let [users, setUsers] = useState({})

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    let token = localStorage.getItem('userToken')
    await fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      response.json().then(result => {
        console.log('Line 21', result)
        setUsers(result)
      })
      .catch(err => {
        console.log('Error in getting users', err)
      })
    })
  }

  let content
  if (users.length > 0) {
    content = users.map((user, i) => {
      return (
        <div key={i}>
          <Table responsive>
            <tbody>
                <tr >
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.galocation}</td>
                    <td>{user.gacourse}</td>
                    <td contentEditable='true'>0</td>
                </tr>
            </tbody>
          </Table>
        </div>
      )
    })
  } else {
    content = <p>No Users Yet...</p>
  }

  return (
    <div className="leaderboard">
      <h2>Seattle Trivia Challenge Leaderboard</h2>
      <thead>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>GA Location</th>
              <th>GA Course</th>
              <th>Points</th>
          </tr>
      </thead>
      {content}
    </div>
  )
}

export default Home
