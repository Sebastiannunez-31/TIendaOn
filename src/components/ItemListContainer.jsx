import React from "react";
 

const ItemListContainer =({greeting})=>{

    return (
        <div className="container alert alert-danger text-center mt-2">
            <p>{greeting}</p>
        </div>

    )

}

export default ItemListContainer