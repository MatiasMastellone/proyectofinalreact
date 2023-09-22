
import { useState,useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

export const Cart = () =>{

    const {cart,removeItem,clearCart} = useContext(CartContext)
    let totalAmount=0;

    cart.map((item)=>(totalAmount=totalAmount+(item.price*item.quantity)))
    
    const length = cart.length

    return (
        
        (length===0) ? 
        (<div>
            <p>No hay productos</p>
            <Link to={"/"}><button>Regresar a inicio</button></Link>
        </div>)
        :(
            <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Subtotal</th>
              <th></th>              
            </tr>
          </thead>
          <tbody>
            {cart.map((item)=>(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.quantity*item.price}</td>
                <td><button onClick={()=>removeItem(item.id)}>Eliminar</button></td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td colSpan={4}>Total amount</td>
              <td>${totalAmount}</td>
            </tr>
          </tbody>
        </Table>
        <button onClick={clearCart}>limpiar carrito</button>
        </>      
    )
     );


}