import"./myButton.css";
import React from "react";

function MyButton(props) {
    
    return(
        <button
        id="btn"
        >
        {props.children}
        </button>

    );
    
}

export default MyButton;