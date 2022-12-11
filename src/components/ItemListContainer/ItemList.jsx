import React from 'react';
import "./ItemList.css";
import Item from './Item';

function ItemList({productsList}) {
    
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


