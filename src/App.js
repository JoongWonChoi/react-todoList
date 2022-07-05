import React, {useState} from "react";
import { MdAddCircle } from "react-icons/md";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import "./App.css";


var nextId = 4; 
//App 함수 밖에 설정하는 이유?
//App 함수가 새로 rendering 될 때 마다 초기값으로 돌아가기 때문에
//함수 밖 고유 영역에 설정
function App() {

  // ** [조건부 연산자] ==> { A ? B : C} :: A가 참이면 B, or C

  // ** [map 함수] ==> todos.map( (todo) => <div>{ todo.id } {todo.text} . . </div>)
  // -> todos라는 객체 배열에서 1. 반복문으로 각 배열에 접근하여 2. todo라는 alias를 부여하고
  // 3. todo라는 alias로 각 배열의 요소에 접근 가능

  // ** [useState의 함수형 업데이트] ==> setTodos( todos => ~~ ) :: 기존의 값을 => 이후의 값으로 update

  // ** [...todo] => 스프레드 함수. :: todo라는 객체 전체를 복사해옴
  // ex) const obj1 = { a:1, b:2};
  //     const obj2 = {...obj1};
  // ex) (...todos, todos[0].text) 와 같은 형식으로 사용 가능 ==> todos 객체 배열 복사, 복사된 todos의 0번째 배열의 'text'값

  const [insertToggle, setInsertToggle] = useState(false);
  
  const [todos, setTodos] = useState([
    {id : 1, text : "할일 1", checked : true},
    {id : 2, text : "할일 2", checked : false},
    {id : 3, text : "할일 3", checked : true}
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev); //useState의 함수형 업데이트 // setInsertToggle( => );
  };

  const onInsertTodo = (text) => {
    if(text === ""){
      return alert('할 일을 입력해주세요');
    }
    else { //input폼에 입력된 text가 공백이 아니라면
      const todo = { //새로운 todo배열을 생성하고 new TodoItem 생성
        id : nextId,
        text : text,
        checked : false
      };//그 후 useState의 setTodo함수를 통해 기존의 todos 배열에 new TodoItem 추가
      setTodos(
        todos => todos.concat(todo)); //상태 불변성을 위해 push보단 concat을 사용하여 새로운 객체 배열 리턴
      nextId++;
    }

  };

  const onCheckToggle = (id) => {
    console.log(...todos,todos[0].checked);
    setTodos(
      todos => //함수형 업데이트 :: 기존의 todos 객체 배열을 새로운 값으로 업데이트
      //업데이트 될 todos의 값 start 
        todos.map(todo =>  //map 함수
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
          )
      //업데이트 될 todos의 값 fin
      );
  };

  return (
    // * Template 컴포넌트 : 제목과 전체 배경을 구성
    // * TodoList 컴포넌트 : 할 일 리스트 배경
    // * TodoItem 컴포넌트 : 할 일 각 요소
    // * TodoInsert 컴포넌트 : 할 일 추가할 수 있는 폼 컴포넌트

    //Template태그 사이에 있는 요소들이 children으로 Template 컴포넌트에 전달됨.
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} />
        {/* TodoList 컴포넌트에 props로 ' todos : {todos(미리 state로 지정해놓은 todo 배열)} '전달 */}
        {/* + props로 'onCheckToggle : onCheckToggle(함수)' 전달 */}
      
      <div className="add-todo-button" onClick={onInsertToggle}>
        {/* MdAddCircle 컴포넌트 (버튼)을 클릭하면 onClick 이벤트로 onInsertToggle 함수가 실행됨. */}
        {/* onInsertToggle 함수는 insertToggle, 즉 insert form의 등장 여부를 나타내는 state(boolean)를 이전 상태의 반대로 변경시켜줌. */}
        {/* 따라서 onInsertToggle 함수가 실행되어 insertToggle이 true로 바뀌면 TodoInsert 컴포넌트 실행  */}
        <MdAddCircle />
      </div>
      {insertToggle && //조건부 렌더링 ==> { A && B } // A:조건, B:표현 // 조건(A)이 true이면 표현(B) 사용
        <TodoInsert 
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          />}
    </Template> //컴포넌트 태그 사이에 있는 것들을 children이라는 인자로 받아서 보여줄 수 있다.
    
  );
}

export default App;
