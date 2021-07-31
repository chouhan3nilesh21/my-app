import React from 'react';

function AlertComponent(){

    const showAlert=()=>{
        alert("React is a Good UI Library");
    }

    return (
        <button onClick={showAlert}>Click Me</button>
    )
}

export default AlertComponent;