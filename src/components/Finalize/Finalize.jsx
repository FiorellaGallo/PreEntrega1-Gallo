import React, {useContext,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/myButton";
import { cartContext } from "../../Context/cartContext";
import './finalize.css';

function Finalize() {
    const idOrder = useParams().idOrder;
    const  {clear} = useContext(cartContext);

    useEffect(() => {
        clear();
    }, [])
    

    return (
        <div className="finalize">
        <div className="thanksContainer">
            <h2 className="thanks">Thanks for your purchase</h2>
            <h3 className="numOrder">His ID is: {idOrder}</h3>
            <div>
                <Link to="/" className="links">
                    <MyButton> ⇠ Continue purchase </MyButton>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Finalize;
