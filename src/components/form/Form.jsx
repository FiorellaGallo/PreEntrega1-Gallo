import React, { useContext } from 'react'
import { createOrder } from '../../services/firestore';
import { cartContext } from '../../Context/cartContext';
import { useNavigate } from "react-router-dom";
import './Form.css';


function Form() {
  const { cart, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

   async function handleCheckout(event) {
    event.preventDefault();
    const order = {
      buyer: {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        direction: `${event.target.street.value}  ${event.target.number.value} ${event.target.department.value}`,
        location: `${event.target.state.value} ${event.target.city.value} ${event.target.postcode.value}`,
        comment: event.target.comment.value,
        newsletter: event.target.news.value,
      },
      items: cart,
      total: priceInCart(),
      date: new Date(),
    };

    console.log(order);

    const orderId = await createOrder(order);
    navigate(`/finalize/${orderId}`);


    
  }





  return (
    <div className='formContainer'>
      <div className="form">
        <form onSubmit={handleCheckout} action="#" method="get" className="formPurchase">
          <h1>Form purchase</h1>
          <label className="personalInformation">
            <input type="text" placeholder="Name" name="name" required />
            <input type="text" placeholder="Surname" name="surname" required />
          </label>
          <div className="email">
            <input type="email" placeholder="Email" name="email" id="" required />
          </div>
          <div className='directionContainer'><div className='direction'>Direction</div><div className='lineDirection'></div>
            <input type="text" placeholder='Street' name='street' required />
            <input type="text" placeholder='Number' name='number' required />
            <input type="text" placeholder='Department' name='department' />

            <div className='directionContainer'>
              <div className='country'>Country : USA </div><div className='lineDirection'></div>
              <div className='state'><label >State:</label>
                <select className="form-control" name='state' id="exampleFormControlSelect1" required >
                  <option>Colorado</option>
                  <option>Nevada</option>
                  <option>Misuri</option>
                  <option>Texas</option>
                  <option>Kansas</option>
                </select></div>
              <input type="texto" placeholder='City' name="city" required ></input>
              <input type="text" placeholder='Postcode' name='postcode' required /></div>
          </div>
          <label className="phone">
            <input type="text" placeholder='Phone' name='phone' required />
          </label>
          <div >
            <textarea  className="comment" name="comment" cols="40" rows="10" placeholder="Comment"></textarea>
          </div>
          <label >
            <input className="checkbox" type="checkbox" name="news" />
            <span> Subscribe to newsletter</span>
          </label>
          <div className="send">
            <input type="submit" />
          </div>
        </form>
      </div>
      <div className='purchase'>
       <div className="price">Total price :<div>$ {priceInCart()} </div></div>
        {cart.map((product) => (
          <div key={product.id} className=" product  productContainer">
            <img src={product.image_link} alt={product.name} className="img productImg" />
            <h4 className=' productName'>{product.name}</h4>
            <span  className='countNumber number '>{product.count}</span>
          </div>
        ))}</div>
    </div>
  )
}

export default Form;