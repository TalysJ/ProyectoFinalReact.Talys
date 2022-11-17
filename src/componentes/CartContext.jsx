import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);
export const CartProvider = ({ children }) => {
  const [producto, setProducto] = useState([]);

  console.log(producto);
  const isInCart = (id) => {
    const found = producto.find((producto) => producto.id === id);
    return found;
  };
  const addItem = (item, qty) => {
    const newProduct = {
      ...item,
      qty,
    };
    if (isInCart(item.id)) {
      const found = producto.find((producto) => producto.id === item.id);
      const productIndex = producto.indexOf(found);
      const auxArray = [...producto];
      auxArray[productIndex].qty += qty;
      setProducto(auxArray);
    } else {
      setProducto([...producto, newProduct]);
    }
  };

  const removeItem = (id) => {
    setProducto(producto.filter((i) => i.id !== id));
  };
  const clearItems = () => {
    setProducto([]);
  };
  const totalPrice = () => {
    return producto.reduce((prev, act) => prev + act.qty * act.price, 0);
  };
  const getItemQuantity = () => {
    return producto.reduce((acumulator, item) => (acumulator += item.qty), 0);
  };

  return (
    <CartContext.Provider
      value={{
        producto,
        addItem,
        removeItem,
        clearItems,
        totalPrice,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};