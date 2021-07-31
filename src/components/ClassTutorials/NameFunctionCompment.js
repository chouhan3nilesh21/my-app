import React from 'react'



function NameFunctionComponent(props){
    return (
        <div>
            <h3>Hello {props.name}</h3>
            <h4>Message:{props.message}</h4>
        </div>
    )
}

export default NameFunctionComponent;

