import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Item = ({ producto }) => {
  const { image, title, description, price } = producto;

  return (
    <>
      <Card className="Card">
        <Card.Img className="cardImg" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="text">$ {price}</Card.Text>
          <div className="button">
            <NavLink to={`/item/${producto.id}`}>
              <Button className="btn btn-dark" variant="primary">
                Ver detalles
              </Button>
            </NavLink>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;