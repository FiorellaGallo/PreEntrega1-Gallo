import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
    const [product, setProduct] = useState(false);
    const { idItem } = useParams();

    async function itemState() {
        let response = await fetch(`${process.env.PUBLIC_URL}/productos.json`)
        let products = await response.json();
        let singleProduct = await getSingleItem(idItem, products);
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