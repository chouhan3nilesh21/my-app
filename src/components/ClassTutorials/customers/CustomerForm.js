import React, { useState } from 'react'

export default function CustomerForm(props) {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');

    const handleFirstName=(event)=>{
        setFirstName(event.target.value);
    }

    const handleLastName=(event)=>{
        setLastName(event.target.value);
    }

    const handleEmail=(event)=>{
        console.log(event)
        setEmail(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Form Submitted")

        const customer={
            firstName:firstName,
            lastName:lastName,
            email:email
        }
        props.onSubmit(customer);
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (
        <div>
            <h3>Add Customer</h3>
            <hr/>
            <form className="ui form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>First Name:</label>
                    <input 
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={firstName}
                        onChange={handleFirstName}
                    />
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={lastName}
                        onChange={handleLastName}
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>

                <button className="btn btn-primary">Submit</button>

            </form>
            
        </div>
    )
}
