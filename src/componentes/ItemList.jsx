import React from "react";
import Item from "./Item";

const ItemList = ({ producto }) => {
  return (
    <>
      <div className="map">
        {producto?.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
