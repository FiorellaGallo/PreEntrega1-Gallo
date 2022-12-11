import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
import { exporArrayToFirestore } from '../../services/firestore';
import Count from '../Count/Count';
import MyButton from '../MyButton/myButton';
import "./CartView.css";

function CartView() {
  const { cart, clear, removeItem, priceInCart, addToCart } = useContext(cartContext);
  const [changeTitle, setChangeTitle] = useState(true);

  useEffect(() => {
    setChangeTitle(cart.length === 0)
  }, [])

  console.log(cart);

  function handleExport() {
    exporArrayToFirestore()
  }

  function changeCountProduct(product, count) {
    addToCart(product, count)
  }

  function remove(id) {
    removeItem(id)
  }

  function clearCart() {
    setChangeTitle(true)
    clear()
  }




  function totalPrice() {
    return priceInCart()

  }

  return (
    <div className='productCart'>
      {changeTitle ? <div className='emptyCart'> Empty cart</div> : <div><div className='titleProduct'> Your cart</div><div className='line'></div></div>}

      {cart.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image_link} alt={product.name} className="productImg" />
          <h4 className='productName'>{product.name}</h4>
          <div className='productCount'>
            <Count changeCountProduct={changeCountProduct} product={product} itemDetailCalled={false} />
          </div>
          <div className='priceUnit'>Price by unit  <h5 className='productPrice'>$ {product.price} </h5></div>
          <button className='removeButton' type='button' onClick={() => remove(product.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg></button>
        </div>

      ))}

      {changeTitle ? "" : <div className='totalPriceContainer'><div className="totalPrice">Total price :<div>$ {totalPrice()} </div><Link to="/" className='links' ><MyButton> ⇠ Continue purchase </MyButton></Link>
        <MyButton onClick={clearCart} className='clear'> Clear</MyButton></div>
        <Link to="/form" className='links' ><MyButton className='finalize'>Finalize purchase</MyButton></Link></div>}


    </div>
  )
}

export default CartView;