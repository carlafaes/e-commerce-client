/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setIdBagProducts } from "../../Redux/Actions/productsActions";
import {
  addToLocalStorageIds,
  getToLocalStorageIds,
} from "../../Utils/shoppingBag";
import CartShoppingBag from "../CartShoppingBag";

const ShoppingBag = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const bagProducts = useSelector((store) => store.productsReducer.bagProducts);
  const dispatch = useDispatch();
  const ids = getToLocalStorageIds();

  useEffect(() => {
    dispatch(setIdBagProducts(ids));
    return () => {
      alert("dimount");
      addToLocalStorageIds(
        bagProducts.map((product) => {
          return {
            id: product.id,
            amount: product.amount,
          };
        })
      );
    };
  }, []);

  return (
    <div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartShoppingBag cartItems={bagProducts} />
      </Drawer>
      <button style={{ fontSize: "2em" }} onClick={() => setCartOpen(true)}>
        <Badge badgeContent={bagProducts.length} color="error">
          <BiShoppingBag />
        </Badge>
      </button>
    </div>
  );
};

export default ShoppingBag;
