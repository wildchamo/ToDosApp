import React from "react";
import './TodoSearch.css';


function TodoSearch(){

    const [search, setSearch]= React.useState(''); 

     const onSearchValueChange= (event)=>{
         console.log(event.target.value);
         setSearch(event.target.value);
     };

    return[
        <input onChange={onSearchValueChange} value={search} className="TodoSearch" placeholder="Hola nombreUsuario"/>
    ,
        <p>{search}</p> 
];
}
export  {TodoSearch};