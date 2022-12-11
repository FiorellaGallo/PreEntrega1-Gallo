import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import {Link} from "react-router-dom";
import MyButton from "../MyButton/myButton";


function Finalize() {
  const idOrder = useParams().idOrder;
  swal (`Thanks for your purchase.His id is ${idOrder}`, {
    icono: "exito",
    buttons: false,
    timer: 2000,
})





  return (
  <div><Link to="/" className='links' ><MyButton> ⇠ Continue purchase </MyButton></Link></div>
  );
}

export default Finalize;