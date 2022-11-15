import "./ItemDetail.css";

function ItemDetail({product}) {
    return (
        <div className="detail" style={{width: "50rem"}}>
            <img src={product.image_link} className="img-product" alt="..."/>
                <div className="card-detail">
                    <h5 className="title-img">{product.name}</h5>
                    <p className="text-img">{product.description}</p>
                    <h6>${product.price}</h6>
                    <button  onClick={handleClick} className="btn " style={{backgroundColor:"#ff5e33", }}>Buy</button>
                </div>
        </div>
    )
}
const handleClick = () =>{
    alert("Próximamente...");
}

export default ItemDetail;