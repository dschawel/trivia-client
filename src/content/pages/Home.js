import React, {useState, useEffect } from 'react'
import { Table } from 'reactstrap';
// import Table1 from './Table1'

const Home = props => {
  let [users, setUsers] = useState({})
  let [points, setPoints] = useState('')

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

  const handlePoints = (e) => {
    let token = localStorage.getItem('userToken')
    e.preventDefault()
    //API Call
    let data = {
      points
    }
    fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(newPoints => {
      console.log('In the then statement', newPoints)
      setPoints(newPoints.users.points)
    })
    .catch(err => {
        console.log('Failed to update points', err)
    })
  }

  // hoping this will sort the table by points once the points get saved
  // let sortedPoints = [...points];
  // sortedPoints.sort((a, b) => {
  //   if (a.points < b.points) {
  //     return -1;
  //   }
  //   if (a.points > b.points) {
  //     return 1;
  //   }
  //   return 0;
  // })
  
  let content
  if (users.length > 0) {
    content = users.map((user, i) => {
      return (
        <div key={i}>
          <Table bordered>
            <tbody>
                <tr >
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.galocation}</td>
                    <td>{user.gacourse}</td>
                    <td name="points" id="points" contentEditable='true' onChange={e => setPoints(e.target.value)} suppressContentEditableWarning={true}>{user.points}</td>
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
      {/* <Table1 data={content}/> */}
      <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>GA Location</th>
                <th>GA Course</th>
                <th>Points</th>
            </tr>
        </thead>
      </table>
      {content}
      <button onClick={handlePoints}>Update Points</button>
      </div>
    
  )
}

export default Home

