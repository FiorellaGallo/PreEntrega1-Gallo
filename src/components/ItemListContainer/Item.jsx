import ToggleButton from "../ToggleButton/ToggleButton";
import MyButton from "../MyButton/myButton";
import{Link} from "react-router-dom";
import "./Item.css";

function Item({products}) {
    return (
        <div key={products.id} className="card" style={{ width: "15rem" }}>
            <div className="favbtn">
            <ToggleButton icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
            } />
            </div>
            <img src={products.image_link} className="card-img-top" ></img>
            <div className="card-body">
                <h5 className="card-title">{products.name}</h5>
                <Link to={`/detail/${products.id}`}>
                    <MyButton>Ver más</MyButton>
                </Link>
            </div>
        </div>
    )
}

export default Item;

