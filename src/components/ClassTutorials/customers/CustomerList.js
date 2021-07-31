import React, { useState } from 'react';
import CustomerDetails from './CustomerDetails';
import CustomerForm from './CustomerForm';
import customersData from './customers.json';

export default function CustomerList() {

    const [customers,setCustomers]=useState(customersData);
    const [selectedCustomer,setSelectedCustomer]=useState(null);

    const onCustomerSelect=(customer)=>{
        setSelectedCustomer(customer);
    }

    const tableRows=customers.map((customer,index)=>{
        return (
            <tr key={index} onClick={()=>onCustomerSelect(customer)}>
                <td>{customer.id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
            </tr>
        )
    });

    const addCustomer=(newCustomer)=>{
        const totalCustomer=customers.length;
        newCustomer.id=totalCustomer+1;
        let customerList=[...customers];
        customerList.push(newCustomer);
        setCustomers(customerList);
    }

    return (
        <div>
            <h1>Customer List</h1>
            <table className="table table-hover table-bordered table-sm">
                <thead className="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
            <br />
            <br />
            
            <div className="row">
                <div className="col-md-6">
                    <CustomerForm onSubmit={addCustomer}/>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                {selectedCustomer ? <CustomerDetails customer={selectedCustomer}/>: null }
                </div>
            </div>
           
        </div>
    )
}
