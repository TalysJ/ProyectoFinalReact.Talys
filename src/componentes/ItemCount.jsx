import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function ItemCount({ initial, stock, onAdd }) {
  const [qty, setQty] = useState(initial);

  const decrease = () => {
    setQty(qty - 1);
  };
  const increase = () => {
    setQty(qty + 1);
  };

  return (
    <>
      <div>
        <Button
          className="btn btn-danger btn-sm"
          disabled={qty <= 1}
          onClick={decrease}
        >
          -
        </Button>
        <span>{qty}</span>
        <Button
          className="btn btn-info btn-sm"
          disabled={qty >= stock}
          onClick={increase}
        >
          +
        </Button>
        <br />
        <Button disabled={stock <= 0} onClick={() => onAdd(qty)}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}
