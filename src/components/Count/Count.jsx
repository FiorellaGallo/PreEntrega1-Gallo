import React, { useState } from 'react';
import MyButton from "../MyButton/myButton";
import "./Count.css";


function Count({ product, onAddToCart, changeCountProduct, itemDetailCalled }) {
    let [count, setCount] = useState(product.count ? product.count : 0);

    function addition() {
        if (count < product.stock) {
            setCount(count + 1);
            if (itemDetailCalled === false) {
                changeCountProduct(product, 1)
            }

        }

    }
    function subtraction() {
        if (count > 0) {
            setCount(count - 1);
            if (itemDetailCalled === false) {
                changeCountProduct(product, -1)
            }
        }
    }



    return (
        <div className='count-container' >
            <div className='button-container'>
            <button onClick={subtraction}  type="button"  className='buttonCount'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg></button>
            <div className='number buttonCount' >
            <span >{count}</span>
            </div>
            <button onClick={addition} type="button" className='buttonCount'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg></button>
            </div>
            {itemDetailCalled ? <MyButton onClick={() => onAddToCart(count)}  className="btn" >Buy now</MyButton> : ""}

        </div>
    )
}

export default Count;