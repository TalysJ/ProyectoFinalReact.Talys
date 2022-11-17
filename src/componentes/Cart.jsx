import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Card, Table } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sentOrder, setSentOrder] = useState(false);
  const [orderId, setOrderId] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "pedidos");

  const { producto, removeItem, clearItems, totalPrice } =
    useContext(CartContext);

  function handleClick() {
    const order = {
      buyer: { name, email, phone },
      items: producto,
      total: totalPrice(),
      fecha: new Date(),
    };
    console.log(order);
    addDoc(orderCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        setSentOrder(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (producto.length === 0) {
    return (
      <>
        <Card>
        <Card.Header as="h5">Bmw Mundo</Card.Header>
        <Card.Body>
          <Card.Title>Tu carro está vacío</Card.Title>
          <Link to="/">
            <Button className="btn btn-danger" variant="primary">Comenzar a comprar</Button>
          </Link>
        </Card.Body>
        </Card>
      </>
    );
  }

  return (
    <>
      <div className="map">
        {producto.map((item) => (
          <div key={item.id}>
            <Card className="Card">
              <Card.Img className="cardImg" variant="top" src={item.image} />

              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="text"> VALOR $ {item.price}</Card.Text>
                <p className="btn btn-dark" variant="primary">
                  {" "}
                  Cantidad: {item.qty}
                </p>
                <p className="btn btn-dark" variant="primary">
                  {" "}
                  Subtotal:$ {item.qty * item.price}
                </p>

                <Button
                  className="btn btn-dark"
                  variant="primary"
                  onClick={() => removeItem(item.id)}
                >
                  borrar producto
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        <br></br>

        <Table striped bordered hover size="dark">
          <thead>
            <tr>
              <th>
                <font color="white">Valor total compra:</font>{" "}
              </th>
              <th>
                <font color="white"> $ {totalPrice()}</font>
              </th>
            </tr>
          </thead>
        </Table>
      </div>

      <div className="checkoutBody">
        <h1>
          <font color="white">¡Gracias por comprar en BMW Mundo!</font>
        </h1>
        <p>
          <font color="white">
            Llena los campos completar la compra
          </font>
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre..."
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email..."
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Tu teléfono..."
        />
        <Button onClick={handleClick}>EMITIR COMPRA</Button>
        <Button
          className="btn btn-red"
          variant="primary"
          onClick={() => clearItems()}
        >
          Vaciar carrito
        </Button>
      </div>
      {sentOrder && (
        <div className="sentOrder">
          <h2>
            <font color="white">Numero de pedido:</font>
          </h2>
          <p className="orderId">
            <font color="white">{orderId}</font>
          </p>
          <p>
            <font color="white">
              En las proximas 24 horas, nos pondremos en contacto para gestionar el pago y envío!
            </font>
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;