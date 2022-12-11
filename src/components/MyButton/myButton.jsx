import"./myButton.css";
import React from "react";

function MyButton(props) {
    
    return(
        <button
        id="btn"
        onClick={props.onClick}
        >
        {props.children}
        </button>

    );
    
}

export default MyButton;