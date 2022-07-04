import React, { useState } from "react";
import "./TodoInsert.css";
import { MdAddCircle } from "react-icons/md";

function TodoInsert({onInsertToggle, onInsertTodo}){
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {//폼의 버튼 클릭 (제출) 시
        e.preventDefault(); //새로고침 막기
        onInsertTodo(value); //props로 넘어온 onInsertTodo 함수로 현재 input 폼에 작성된 value값 전달
        setValue(""); //일련의 동작 마친 후 다시 value 값 초기화
        onInsertToggle(); //일련의 동작 마친 후 창 종료

    }
    return(
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input placeholder="what to do?" value={value} onChange={onChange}></input>
                <button type="submit">
                    <MdAddCircle></MdAddCircle>
                </button>
            </form>
        </div>
    );



}
export default TodoInsert;