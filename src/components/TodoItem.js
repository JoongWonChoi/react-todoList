import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import "./TodoItem.css";

function TodoItem({ todo, onCheckToggle }){ //TodoList에서 todo 객체를 받아옴
    //console.log(todo.text);
    const { id, text, checked } = todo; //객체 구조 분해를 통해 todo 객체에서 text를 가져옴
    //console.log({text});
    return(
        <div className="TodoItem">
            <div className={`content ${checked ? 'checked' : ""}`}>
                {checked ? (
                    <MdCheckBox 
                        onClick={() => {
                            onCheckToggle(id);
                            }}
                        />
                     ) : (
                    <MdCheckBoxOutlineBlank
                        onClick={() => {
                            onCheckToggle(id);
                            }}
                        />
                     )
                    }
                <div className="text">{text}</div>
            </div>
        </div>
    );
};
export default TodoItem;