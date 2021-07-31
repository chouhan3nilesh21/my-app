import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import transactionData from './data/Transactions.json';

const columns = [

    {field: 'id', headerName: 'ID', width: 100  },
    {field: 'refNum', headerName: 'Reference number', width: 150 },
    {field: 'payFrom', headerName: 'Pay From', width: 150 },
    {field: 'payTo', headerName: 'Pay To', width: 150 },
    {field: 'amount', headerName: 'Amount', width: 150 },
    {field: 'paymentDate', headerName: 'Payment Date', width: 150 },
    {field: 'paymentType', headerName: 'Payment Type', width: 150 },
    {field: 'status', headerName: 'Status', width: 150 }
];



export default function ManageTransactions() {

const [transactions,setTransactions] = useState(transactionData);


    return (
        <div style={{ height: 400, width: '100%', }}>
      <DataGrid
        rows={transactions}
        columns={columns}
        pageSize={5}
        checkboxSelection
        // disableSelectionOnClick
      />
    </div>
    );
}

 