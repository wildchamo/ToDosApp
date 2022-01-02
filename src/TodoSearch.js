import React from "react";
import './TodoSearch.css';


function TodoSearch(){
    const onSearchValueChange= (event)=>{
        console.log(event.target.value);
    };

    return(
        <input onChange={onSearchValueChange} className="TodoSearch" placeholder="Hola nombreUsuario"></input>
        );
}
export  {TodoSearch};