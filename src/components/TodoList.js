import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

//할 일 객체가 들어가 있는 배열
function TodoList({todos, onCheckToggle}){
    const _TodoList = todos.map( (todo) => (
        <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}></TodoItem>
            )
        );
    return(
        <div className="TodoList">
            {_TodoList}
        </div>

    );
}
export default TodoList;
