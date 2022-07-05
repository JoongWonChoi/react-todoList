import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import "./TodoItem.css";

function TodoItem({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }){ //TodoList에서 todo 객체를 받아옴
    //TodoList컴포넌트에서 map함수를 통해 todos의 배열을 반복적으로 분해하여 TodoItem으로 전달
    const { id, text, checked } = todo; //객체 구조 분해를 통해 todo 객체에서 text를 가져옴

    return(
        <div className="TodoItem">
            <div className={`content ${checked ? 'checked' : ""}`}> 
            {/* checked : true => className={ content checked }  */}
            {/* checked : false => className={ content("") }  */}
                {/* 조건부 연산자 사용 :: { A ? B : C} ==> 조건 A가 참일 때 B, 거짓일 때 C */}
                {checked ? ( //해당 item의 checked:true일 시
                    <MdCheckBox //체크된 박스 아이콘 사용
                        onClick={() => { //해당 아이콘을 클릭 시의 event 처리
                            onCheckToggle(id); //해당 item의 id값을 App.js의 onCheckToggle 함수로 전달
                            }}
                        />
                     ) : ( //해당 item의 checked:false일 시
                    <MdCheckBoxOutlineBlank //비어있는 박스 아이콘 사용 
                        onClick={() => { //해당 아이콘을 클릭 시의 event 처리 
                            onCheckToggle(id); //해당 item의 id값을 App.js의 onCheckToggle 함수로 전달
                            }}
                        />
                     )
                    }
                <div className="text" 
                    onClick={() => {
                        onChangeSelectedTodo(todo)
                        onInsertToggle();
                    }}
                    >
                        {text}
                    </div>
            </div>
        </div>
    );
};
export default TodoItem;