//import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import './App.css';


const todos=[
  {text: 'Jugar cartas',completed:true},
  {text: 'Estudiar Platzi',completed:false},
  {text: 'Hacer algo de comer',completed:false},
]

function App() {
  return (
    <React.Fragment>
    
    <TodoCounter/>

    <TodoSearch/>
   
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))} 
    </TodoList>

    <CreateTodoButton/>
   

    </React.Fragment>
      );
}

export default App;
