import { createContext, useState } from "react";


export const cartContext = createContext();
const ContextProvide = cartContext.Provider;

export function CartContextProvide(props) {
    const [cart, setCart] = useState([]); 

    function addToCart(product,count) {
       let newCart = [...cart] ;   
        
     let itemExists =  cart.find((item)=> item.id === product.id)
        if (itemExists) {
         newCart = cart.map ((item)=>{

            if (item.id === product.id) {
                item.count += count
                
            }
            return item
         }) 
         setCart(newCart)
            
        }else{
            newCart.push ({...product,count});
            setCart(newCart)  
        }
    }

    function itemsInCart() {
        let total = 0
        cart.forEach(itemInCart => total = total + itemInCart.count)
        return total;
        
    }
   
    function priceInCart() {
        let totalPrice = 0
        cart.forEach(products => totalPrice = totalPrice + (products.price * products.count))
        return parseInt(totalPrice);   
    }

    function removeItem(id) {
        let newCart =  cart.filter((item)=> item.id !== id)
        setCart(newCart)
    }

    function clear() {
        setCart([])    
    }



    return(
        <ContextProvide value= {{addToCart,cart,itemsInCart, priceInCart,removeItem,clear}}>
        {props.children}
        </ContextProvide>
    )
    
}
