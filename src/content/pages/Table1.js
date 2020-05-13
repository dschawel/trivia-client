// import React, { Component } from 'react';
// // import { Table } from 'reactstrap';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// // import '../css/Table.css';
// import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

// class Table1 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { 
//             users: []
//         }
//     }
//     componentDidMount(){        
//         let token = localStorage.getItem('userToken')
//         fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
//             headers: {
//             'Content-type': 'application/json',
//             'Authorization': `Bearer ${token}`
//             }
//         })
//         .then(response => {
//             console.log('Line 24', response)
//             this.setState({  })
//             })
//             .catch(err => {
//             console.log('Error in getting users', err)
//             })
//         } 
    

//     render() {
//         return (
//             <BootstrapTable data={this.props.user}>
//                 <TableHeaderColumn isKey dataField='firstname'>
//                 First Name
//                 </TableHeaderColumn>
//                 <TableHeaderColumn dataField='lastname'>
//                 Last Name
//                 </TableHeaderColumn>
//                 <TableHeaderColumn dataField='galocation'>
//                 GA Location
//                 </TableHeaderColumn>
//                 <TableHeaderColumn dataField='gacourse'>
//                 GA Course
//                 </TableHeaderColumn>
//                 <TableHeaderColumn dataField='points'>
//                 Points
//                 </TableHeaderColumn>
//             </BootstrapTable>
//         )
//     }
// }

// export default Table1