//import './App.css';
import React from 'react';
import TodoCounter from './TodoCounter';

const todos=[
  {text: 'Jugar cartas',completed:false},
  {text: 'Estudiar Platzi',completed:false},
  {text: 'Hacer algo de comer',completed:false},
]

function App() {
  return (
    <React.Fragment>
    
    <TodoCounter/>
    {/* <TodoSearch/> */}
    <input placeholder="Hola nombreUsuario"></input>
    {/* <TodoList>
      {todos.map(todo => (
        <TodoItem/>
      ))} */}
    {/* <TodoList/> */}
    {/* <CreateTodoButton/> */}
    <button>+</button>

    </React.Fragment>
      );
}

export default App;
