import React,{useState} from "react";
import "./ToggleButton.css";


function ToggleButton(props) {
    const[isFavorite,setIsFavorite] = useState(false);

    const handleFavorite = () =>{
        setIsFavorite(!isFavorite)
    }

    let FavBtn = isFavorite ? "card-favicon favorite" : "card-favicon";

    return(
        
        <button onClick={handleFavorite} className={FavBtn} >
          <div className={FavBtn}>
          {props.icon}
          </div>
        </button>

    );
    
}

export default ToggleButton;