import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function ItemDetailCOntainer() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", id);
    getDoc(queryDoc)
    .then((res) => setProducto({ id: res.id, ...res.data() }));
  }, [id]);

  return (
    producto.price ? <ItemDetail producto={producto} /> : 
    <Card>
      <Card.Header as="h5">Bmw Mundo</Card.Header>
      <Card.Body>
        <Card.Title>Producto no encontrado</Card.Title>
        <Card.Text>Haz click en home para volver</Card.Text>
      </Card.Body>
    </Card>
  ) 
}

export default ItemDetailCOntainer;
