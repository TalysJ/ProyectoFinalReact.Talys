import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");

    if (id) {
      const queryFilter = query(queryCollection, where("description", "==", id));
      getDocs(queryFilter).then((res) =>
        setProducto(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setProducto(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    }
  }, [id]);

  return (
    <>
      <div>
        <ItemList producto={producto} />
      </div>
    </>
  );
}
export default ItemListContainer;