import CardItem from "../CartItem";
import styled from "./CartShoppingBag.module.css";
import { FaRegFrownOpen } from "react-icons/fa";

const CartShoppingBag = ({ cartItems, deleteCart }) => {
  return (
    <aside className={styled.container}>
      <h1 className={styled.text_shop}>SHOPPING BAG</h1>
      {cartItems.length === 0 ? (
        <div className={styled.text_shop}>
          Aun no tienes productos en el carrito
          <FaRegFrownOpen />
        </div>
      ) : null}
      {cartItems.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
      <p className={styled.text_total}>
        Total:{" "}
        {cartItems
          .reduce((acum, product) => product.price * product.amount + acum, 0)
          .toFixed(2)}{" "}
        $
      </p>
      <div className={styled.container_buttons}>
        <button className={styled.btn_quitar} onClick={deleteCart}>
          Eliminar carrito
        </button>
        <button className={styled.btn_comprar}>Continuar compra</button>
      </div>
    </aside>
  );
};

export default CartShoppingBag;
