import React, { useState, useEffect } from 'react';
import getItems from "../../services/mockService";
import { useParams } from 'react-router-dom';
import "./ItemList.css";
import Item from './Item';

function ItemList() {
    const [productsList, setProductsList] = useState(false);
    const { idCategory } = useParams();


    useEffect(() => {

        fetch(`${process.env.PUBLIC_URL}/productos.json`)
            .then((datosProductos) => {
                return datosProductos.json();
            })
            .then((userProducts) => {
                getItems(userProducts, idCategory)
                    .then((products) => {
                        setProductsList(products);
                    });

            });
    }, [idCategory]);


    return (
        <div className='cards'>
            {productsList ? productsList.map((products) => (
                <Item products={products} />
            )) : <Spinner/>

            }
        </div>
    )
}

function Spinner() {
    return (
        <div className="d-flex justify-content-center" style={{position:"absolute" ,top :"50%" , left:"50%"}}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}


export default ItemList;


