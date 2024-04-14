import { Todo } from "../model";

interface TodoItemProps{
    id:number;
    todo:Todo;
    onCompleted : (id: number) => void;
    onDeleted : (id: number) => void;
}

export const TodoItem = ({id,todo,onCompleted,onDeleted}:TodoItemProps)=>{
    return(<>
  <div className="row d-flex justify-content-between gy-2">
    <div className="col gy-3">
      {todo.isCompleted?<s>{todo.task}</s>:todo.task}
    </div>
    <div className="col gy-3 d-flex flex-row-reverse">
        <div className="">
            <button type="button" className="btn btn-success" onClick={()=>{onCompleted(id)}}>Done</button>
        </div>
        <div className=" px-3">
            <button type="button" className="btn btn-danger" onClick={()=>{onDeleted(id)}}>Delete</button>
        </div>
    </div>
    
  </div>
    </>);
}