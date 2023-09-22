import { useState } from 'react'



export const ItemCount = ({stock, initial, onAdd})=>{

    const [quantity, setQuantity] = useState (initial)

    const increment = () =>{
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if (quantity > initial){
            setQuantity(quantity-1)
        }
    }


    return(
        <div style={{display:'flex', justifyContent: 'space-around'}}> 
            <div>
            <span style={{color:'red'}} onClick={decrement}>-</span>
            <span style={{color:'black', fontWeight:'bold',margin:"1rem"}}>{quantity}</span>
            <span style={{color:'green'}} onClick={increment}>+</span>
            </div>
            <div>
            <button onClick={()=>onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}