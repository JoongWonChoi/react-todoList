import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

//할 일 객체가 들어가 있는 배열
function TodoList({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}){
    const _TodoList = todos.map( (todo) => (
        <TodoItem 
            todo={todo} 
            key={todo.id} 
            onCheckToggle={onCheckToggle} 
            onInsertToggle={onInsertToggle} 
            onChangeSelectedTodo={onChangeSelectedTodo}>
        </TodoItem>
            )
        );
    return(
        <div className="TodoList">
            {_TodoList}
        </div>

    );
}
export default TodoList;
