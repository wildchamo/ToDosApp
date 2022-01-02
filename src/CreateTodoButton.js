import React from "react";
import './CreateTodoButton.css';

//si directamente escribís el codigo sin envolverlo en una función se ejecuta automaticamente!
function CreateTodoButton(){

    const onClickButton = () =>{
        alert('Aquí se debería abrir el modal!');
    }

    return(
        <button
        className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
        );
}
export  {CreateTodoButton};