import React, { Component } from 'react';
// import { Table } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class Table1 extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { 
    //         users: []
    //     }
    // }
    // componentDidMount(){        
    //     let token = localStorage.getItem('userToken')
    //     fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
    //         headers: {
    //         'Content-type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //         }
    //     })
    //     .then((response) => {
    //         let data = response
    //         this.setState({ data })
    
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
    

    render() {
        const cellEditProp = {
            mode: 'click', 
        }
        // let content
        // if (users.length > 0) {
        //     content = users.map((user, i) => {
        //         return (
        //         <div key={i}>
        //             <Table bordered>
        //             <tbody>
        //                 <tr >
        //                     <td>{user.firstname}</td>
        //                     <td>{user.lastname}</td>
        //                     <td>{user.galocation}</td>
        //                     <td>{user.gacourse}</td>
        //                     <td name="points" contentEditable='true' onChange={e => setPoints(e.target.value)} suppressContentEditableWarning={true}>{user.points}</td>
        //                 </tr>
        //             </tbody>
        //             </Table>
        //         </div>
        //         )
        //     })
        // } else {
        //     content = <p>No Users Yet...</p>
        // }
        return (
            <BootstrapTable data={this.props.data} cellEdit={cellEditProp}>
                <TableHeaderColumn isKey dataField='firstname'>
                First Name
                </TableHeaderColumn>
                <TableHeaderColumn dataField='lastname'>
                Last Name
                </TableHeaderColumn>
                <TableHeaderColumn dataField='galocation'>
                GA Location
                </TableHeaderColumn>
                <TableHeaderColumn dataField='gacourse'>
                GA Course
                </TableHeaderColumn>
                <TableHeaderColumn dataField='points'>
                Points
                </TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default Table1