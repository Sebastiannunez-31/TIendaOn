import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="row my-5">
      <div className="col-md-4 offset-md-4 text-center mt-3">
        <img src={item.imagen} alt={item.nombre} />
        <h1>{item.nombre}</h1>
        <p>
          <b>${item.precio}</b>
        </p>
      <ItemCount stockItems={item.stock}/>
      </div>
    </div>
  );
};

export default ItemDetail;
