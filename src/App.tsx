import React, { useState } from 'react';
import './App.css';
import { Inputfield } from './components/InputField';
import { TodoList } from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Todo } from './model';
import { NavBar } from './components/NavBar';
function App() {
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState<Todo[]>([]); 
  const handleAdd = (e : React.FormEvent) =>{
    e.preventDefault();
    setTodo("");
    if(todo){
      setTodos([...todos,{id:Date.now(),task:todo,isCompleted:false}]);
      setTodo("");
    }
  }

  return (
   <>
    <NavBar />
    <h1 className='d-flex justify-content-center'>Todo List...</h1>
    <div className="container p-2">
    <Inputfield todo={todo} setTodo = {setTodo} handleAdd ={handleAdd}/>
    <TodoList todos ={todos} setTodos = {setTodos} />
</div>
   </>
  );
}

export default App;
