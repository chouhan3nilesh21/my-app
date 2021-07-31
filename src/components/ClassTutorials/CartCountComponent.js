import React, {useState} from 'react';


function CartCountComponent(props){
    console.log(props)
    const[quantity,setQuantity]=useState(props.quantity);
    const [productName,setProductName]=useState(props.product);


    const handleIncrement = ()=>{
        setQuantity(quantity+1);
    }

    const handleDecrement =()=>{
        setQuantity(quantity-1)
       
    }

    const formatCount=()=>{
        return quantity === 0 ? "Zero" : quantity;
    }

    const styles={
        fontSize:15,
        fontWeight:'bold',
    }

    const getBadgeClasses=()=>{
    let classes="badge m-2 badge-";
    classes+= (quantity===0)?'warning':'primary';
    return classes;
    }

    return (
        <div> 
            <h4>{productName}</h4>
            <button className="btn btn-secondary btn-sm m-2" onClick={handleIncrement}>+</button>
            <span style={styles} className={getBadgeClasses()}> {formatCount()} </span>
            <button className="btn btn-info btn-sm m-2" onClick={handleDecrement}>-</button>
            <button className="btn btn-danger btn-sm m-2" 
            onClick={()=>props.onRemove(props.id)}>
                Remove From Cart
            </button>
        </div>
    )
}

export default CartCountComponent;