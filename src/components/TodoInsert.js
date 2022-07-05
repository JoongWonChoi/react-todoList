import React, { useEffect, useState } from "react";
import "./TodoInsert.css";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil} from "react-icons/ti";

function TodoInsert({onInsertToggle, onInsertTodo, selectedTodo, onDelete, onUpdate}){
    const [value, setValue] = useState("");

    const onChange = (e) => { //해당 event 객체가 생성된 곳에서의 target
        setValue(e.target.value);
    };

    const onSubmit = (e) => {//폼의 버튼 클릭 (제출) 시
        e.preventDefault(); //새로고침 막기
        onInsertTodo(value); //props로 넘어온 onInsertTodo 함수로 현재 input 폼에 작성된 value값 전달
        setValue(""); //일련의 동작 마친 후 다시 value 값 초기화
        onInsertToggle(); //일련의 동작 마친 후 창 종료
    }
    //useEffect :: 렌더링이 될 시 컴포넌트가 처음 렌더링 되면 어떤 것을 실행하느냐를 처리할 수 있는 함수
    useEffect( () => {
        if(selectedTodo){
            setValue(selectedTodo.text);
        }
    }, [selectedTodo] );

    return(
        <div>
            <div className="background" 
                onClick={() => {
                    onInsertToggle();
                    //onChangeSelectedTodo(null);
                    }}>
            </div>
            {/* 배경(background) 클릭 시(onClick) => onInsertToggle 함수 발생  */}
            <form onSubmit={ selectedTodo ? (()=>{onUpdate(selectedTodo.id, value);}) : (onSubmit)}>
                <input placeholder="what to do?" value={value} onChange={onChange}></input>
                { selectedTodo ? ( 
                    <div className="rewrite">
                        <TiPencil onClick={() => {
                            alert('update item!');
                            onUpdate(selectedTodo.id, value);
                            }} />
                        <TiTrash onClick={() => {
                            alert('delete item!');
                            onDelete(selectedTodo.id);
                            onInsertToggle();
                            }} />
                    </div>
                ) : (
                <button type="submit">
                    <MdAddCircle></MdAddCircle>
                </button>
                )}
            </form>
        </div>
    );



}
export default TodoInsert;