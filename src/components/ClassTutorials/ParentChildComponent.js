import React from 'react'
import { useState } from 'react';
import CartCountComponent from './CartCountComponent';

export default function ParentChildComponent() {
    const productList=[
        {id:1,name:'Bread',quantity:3},
        {id:2,name:'Butter',quantity:1},
        {id:3,name:'Jam',quantity:1},
        {id:4,name:'Eggs',quantity:6},
        {id:5,name:'Maggi',quantity:5},
      ]
    
      const [products,setProducts]=useState(productList);
     
      const removeFromCart =(productId) =>{
        console.log("product id",productId);
        const filteredProducts=products.filter((product)=>(product.id !==productId));
        setProducts(filteredProducts);
      }
    
      return (
      <div>
      
        {
          products.map((product)=>
            <CartCountComponent key={product.id} product={product.name} 
            quantity={product.quantity}
            onRemove={removeFromCart}
            id={product.id}
            />
          )
        }
      
      </div>
      )
    
    }
    

