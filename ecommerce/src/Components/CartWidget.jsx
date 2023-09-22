import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext.jsx";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { total } = useContext(CartContext);

  return (
    <Link to={"/cart"}>
      <div className="carro">
        <p style={{ color: "white" }}>{total}</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/8906/8906844.png"
          alt="carrito"
          width={70}
        />
      </div>
    </Link>
  );
};
