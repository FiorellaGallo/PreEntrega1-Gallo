import "./ItemDetail.css";
import Count from "../Count/Count";
import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import swal from 'sweetalert';

function ItemDetail({ product }) {
    const { addToCart } = useContext(cartContext);

    function onAddToCart(count) {
        swal (`You added ${count} product to your cart`, {
            icono: "exito",
            buttons: false,
            timer: 2000,
        })
        addToCart(product, count);
    }


    return (
        <div className="fond" style={{ height: "100%" }}>
            <div className="detail">
                <div className="img-product">
                    <img src={product.image_link} alt="..." />
                </div>
                <div className="card-detail">
                    <h5 className="title-img">{product.name}</h5>
                    <p className="text-img">{product.description}</p>
                    <h6>${product.price}</h6>
                    <Count
                        product={product}
                        onAddToCart={onAddToCart}
                        itemDetailCalled={true}
                    />
                   
                </div>

            </div>
        </div>
    );
}

export default ItemDetail;
