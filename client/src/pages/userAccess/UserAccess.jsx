import React from 'react';
import './user.css';
import {TextField , Button} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";

function UserAccess() {
    const style = {textDecoration: 'none', color: 'white'}

    // Tabel Data
    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Full name', width: 200 },
  { field: 'email', headerName: 'E-mail', width: 200 },
  {
    field: 'position',
    headerName: 'Position',
    type: 'String',
    width: 200,
  },
  {
    field: 'role',
    headerName: 'User Role',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


    return (
        <div className='user-container'>
            <div className="user-wrapper">
                <div className="button">
                    <Link to='/create-new-user' style={style}>
                        <Button variant="contained">Add new user</Button>
                    </Link>
                </div>
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        className='table'
      />
      </div>
    </div>
        
    )
}

export default UserAccess
