import React from 'react'

export default function CustomerDetails(props) {

    const customer =props.customer;

    return (
        <div>
            <h3>Customer Details</h3>
            <hr />
            <p>ID: {customer.id}</p>
            <p>First Name: {customer.firstName}</p>
            <p>Last Name: {customer.lastName}</p>
            <p>Email: {customer.email}</p>
            
        </div>
    )
}
