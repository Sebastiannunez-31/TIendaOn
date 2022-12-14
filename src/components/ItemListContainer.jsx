import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
/*   const productos = [
    {
      id: 1,
      nombre: "Camisa leñador rojo",
      precio: 25000,
      imagen:
        "https://cdn.shopify.com/s/files/1/0038/0089/1481/products/product-image-409165731_360x.jpg?v=1571733437",
    },
    {
      id: 2,
      nombre: "Camisa leñador azul",
      precio: 24000,
      imagen:
        "https://cdn.shopify.com/s/files/1/0038/0089/1481/products/product-image-409165743_360x.jpg?v=1571733437",
    },
    {
      id: 3,
      nombre: "Vestido verano turquesa",
      precio: 18000,
      imagen:
        "https://res.cloudinary.com/lippi-outdoor/image/upload/c_limit,dpr_2.0,f_auto,h_1200,q_100,w_1200/v1/media/catalog/product/1/5/155_1_2.jpg?_i=AB",
    },
    {
      id: 4,
      nombre: "Vestido verano amarillo",
      precio: 23000,
      imagen:
        "https://www.hola.com/imagenes/seleccion/20200619170516/vestidos-punto-algodon-verano/0-838-94/vestido-canale-verano-a.webp?filter=high",
    },
    {
      id: 5,
      nombre: "Sandalias egipcias",
      precio: 56000,
      imagen:
        "https://www.mercadisfraces.es/15944-thickbox_default/sandalias-romanas-o-egipcias.jpg",
    },
  ];
 */  

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12- text-center">
            <div className="alert alert-danger" role="alert">
                <p>{greeting}</p>
                
            </div>
            <ItemCount stockItems={10}/>

        </div>
      </div>
      {/* 
            {productos.map(item =>
                <div className="col-md-3">
                    <div className="card text-center mt-3" >
                        <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text "> $<b>{item.precio}</b> </p>
                            <ItemCount />
                        </div>
                    </div>
                </div>
 */}
      
    </div>
  );
};

export default ItemListContainer;
