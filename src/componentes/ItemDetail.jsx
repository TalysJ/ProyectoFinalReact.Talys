import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
  const [cantidad, setCantidad] = useState(0);
  const { image, title, description, price, stock } = producto;
  const { addItem } = useContext(CartContext);

  function onAdd(quantity) {
    addItem(producto, quantity);
    setCantidad(quantity);
  }

  return (
    <>
      <Card className="Card">
        <Card.Img className="cardImg" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="text">$ {price}</Card.Text>
          <p className="card-text text-secondary"></p>
          {cantidad > 0 ? (
            <Link className="btn btn-danger" to={"/cart"}>
              Terminar mi compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetail;