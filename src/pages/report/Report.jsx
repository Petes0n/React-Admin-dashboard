import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './report.scss';



const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  { field: 'lastName', headerName: 'Last name', width: 170 },
  { field: 'Region', headerName: 'Region', width: 170 },
  
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', Region: 'Kumasi' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', Region: 'Takoradi' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', Region: 'Accra' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', Region: 'Accra' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', Region: null },
  { id: 6, lastName: 'Melisandre', firstName: 'Peter', Region: 'Takoradi' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', Region: 'Accra' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', Region: 'Accra' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', Region: 'Kumasi' },
  { id: 10, lastName: 'Clifford', firstName: 'Ferrara', Region: 'Accra' },
  { id: 11, lastName: 'Frances', firstName: 'Rossini', Region: 'Accra' },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', Region: 'Accra' },
];

export default function Report() {
  return (
    <div className="new">
      <div className="newContainer">
        <div className="report-top">
          <h1>REPORT</h1>
        </div>
        </div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid className='report-box-container'
      sx={{color:'white'}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  );
}