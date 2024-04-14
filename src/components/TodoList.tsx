import { Todo } from "../model";
import { TodoItem } from "./TodoItem";

interface TodoListProps{
    todos:Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
    
}

export const TodoList = ({todos,setTodos}: TodoListProps)=>{
    const onCompleted =(id: number)=>{
        setTodos(todos.map(t=>{
            return(t.id===id?{...t,isCompleted:!t.isCompleted}:t);
        }));
    }

    const onDeleted = (id : number) =>{
        setTodos(todos.filter(t=>t.id!=id));
    }

    return(<>
    {todos.map(t=>{
        return(<TodoItem id={t.id} todo={t} onCompleted={onCompleted} onDeleted={onDeleted}/>);
    })}
    </>);
}