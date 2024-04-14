import React from "react";
import { Todo } from "../model";

interface AddTodoProps{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e : React.FormEvent) => void
}

export const Inputfield : React.FC<AddTodoProps>= ({todo,setTodo,handleAdd})=>{
    
    return(<>
    <form className="d-flex" onSubmit={(e)=>handleAdd(e)}>
        <input type="text" className="form-control me-2" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit" className="btn btn-primary" onClick={(e)=>handleAdd(e)}>Add</button>
    </form>
    </>);
}