import Container from "react-bootstrap/esm/Container.js";
import { ItemCount } from "./ItemCount.jsx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext.jsx";


export const ItemDetail = ({ product }) => {

  const [quantityAdded,setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {id:product.id,title:product.title,price:product.price}
    addItem(item,quantity)
  };

  const handleOnClick = ()=>{
    setQuantityAdded(0);
  }

  if (product)
    return (
      <Container >
        <h1 style={{textAlign:'center'}}>{product.title}</h1>
        <img
          style={{ width: "340px"}}
          src={product.pictureURL}
          alt={product.title}
        />

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>{product.description}</p>
          <p>{product.stock}</p>
        </div>

        {quantityAdded===0?(<ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
        ):(<Link to={"/cart"}><button onClick={handleOnClick}>Terminar compra</button></Link>) }
        
      </Container>
    );
};
