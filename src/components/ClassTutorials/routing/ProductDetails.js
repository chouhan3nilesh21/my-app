import React from 'react'

export default function ProductDetails(props) {

    const {history}=props;
    const handleSave=()=>{
        //Navigation handled here

        history.replace("/products")
    }

    return (
        <div>
            <h1>Product Details - {props.match.params.id}</h1>

            <button onClick={handleSave}>Save</button>
        </div>
    )
}
