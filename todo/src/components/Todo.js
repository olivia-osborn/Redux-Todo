import React from "react";
import "./Todo.css"

function Todo(props) {
    return (
        <div className="todo-wrapper">
            <div className={props.todoItem.completed ? "todo completed" : "todo"}onClick={e => props.toggleCompleted(e, props.index)}>
                {props.todoItem.value}
            </div>
            <button className="delete">x</button>
        </div>
    )
}

export default Todo;

