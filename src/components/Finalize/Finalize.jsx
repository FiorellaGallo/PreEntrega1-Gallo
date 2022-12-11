import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';


function Finalize() {
  const idOrder = useParams().idOrder;
  swal (` ${idOrder} product to your cart`, {
    icono: "exito",
    buttons: false,
    timer: 2000,
})





  return (
  <div></div>
  );
}

export default Finalize;