import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import Table from "react-bootstrap/Table";
import {Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  getFirestore,
  addDoc,
  serverTimestamp,
  collection,
} from "firebase/firestore";

export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { cart, removeItem, clearCart } = useContext(CartContext);
  let totalAmount = 0;

  cart.map((item) => (totalAmount = totalAmount + item.price * item.quantity));

  const length = cart.length;

  const handleFormValue = (ev)=>{
    setFormValues(prev => ({...prev,[ev.target.name]:ev.target.value}))    
  }

  const sendOrder = ()=>{
    const db = getFirestore();
    const orderCollection = collection(db, "Orders");

    let order = {
      buyer: formValues,
      items: cart.map((it) => ({
        id: it.id,
        title: it.title,
        quantity: it.quantity,
        price: it.price,
      })),
      total: totalAmount,
      date: serverTimestamp(),
    };

    addDoc(orderCollection,order).then(({id}) =>{
      if(id){
        alert("Your order"+id+"was created successfully");
        setFormValues({
          name: "",
          email: "",
          phone: "",
        })
        clearCart();        
      }
    })
  }

  return length === 0 ? (
    <div>
      <p>No elements assigned</p>
      <Link to={"/"}>
        <button>Back home</button>
      </Link>
    </div>
  ) : (
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
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.quantity * item.price}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td colSpan={4}>Total amount</td>
            <td>${totalAmount}</td>
          </tr>
        </tbody>
      </Table>
      <Container>
        <h2>Complete the information to check out your order</h2>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full name</Form.Label>
            <Form.Control onChange={handleFormValue} value={formValues.name} type="text" placeholder="Enter your full name" name="name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleFormValue} value={formValues.email} type="email" placeholder="Enter your email" name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control onChange={handleFormValue} value={formValues.phone} type="text" placeholder="+5411955556666" name="phone" />
          </Form.Group>         
        </Form>
        <button onClick={sendOrder}>
            Check out order
          </button>
      </Container>
    </>
  );
};
