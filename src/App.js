import React, {useState} from "react";
import { MdAddCircle } from "react-icons/md";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import "./App.css";


var nextId = 4; //App 함수 밖에 설정하는 이유?
//App 함수가 새로 rendering 될 때 마다 초기값으로 돌아가기 때문에
//함수 밖 고유 영역에 설정
function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  
  const [todos, setTodos] = useState([
    {id : 1, text : "할일 1", checked : true},
    {id : 2, text : "할일 2", checked : false},
    {id : 3, text : "할일 3", checked : true}
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = (text) => {
    if(text === ""){
      return alert('할 일을 입력해주세요');
    }
    else {
      const todo = {
        id : nextId,
        text : text,
        checked : false
      };
      setTodos(todos => todos.concat(todo)); //상태 불변성을 위해 pusn보단 concat을 사용하여 새로운 객체 배열 리턴
      nextId++;
    }

  };

  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
          )
      );
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && 
        <TodoInsert 
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          />}
    </Template> //컴포넌트 태그 사이에 있는 것들을 children이라는 인자로 받아서 보여줄 수 있다.
    
  );
}

export default App;
