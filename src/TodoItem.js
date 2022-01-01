import React from "react";

function TodoItem(props){
    return(
        <li>
            <span>Icon</span>
            <p>{props.text}</p>
            <span>OtroIcon</span>
        </li>
        );
}
export  {TodoItem};