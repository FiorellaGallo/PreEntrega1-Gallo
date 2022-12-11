import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleItem } from "../../services/firestore";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
    const [product, setProduct] = useState(false);
    const { idItem } = useParams();

    async function itemState() {
        
       
        let singleProduct = await getSingleItem(idItem);
        setProduct(singleProduct);
    }
    useEffect(() => {
        itemState();
    },[]);

    return (
        product ?  <ItemDetail product={product}/> : ""
       
    )

}

export default ItemDetailContainer