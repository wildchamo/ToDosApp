import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton(){
    return(
        <button
        className="CreateTodoButton"
        onClick={()=> console.log('Hubo un click en el boton!')}
        >+</button>
        );
}
export  {CreateTodoButton};