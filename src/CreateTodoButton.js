import React from "react";
import './CreateTodoButton.css';

//si directamente escribís el codigo sin envolverlo en una función se ejecuta automaticamente!
function CreateTodoButton(){

    const onClickButton = (msg) =>{
        alert(msg);
    }

    return(
        <button
        className="CreateTodoButton"
        onClick={() => onClickButton('HolaJose')}
        >+</button>
        );
}
export  {CreateTodoButton};