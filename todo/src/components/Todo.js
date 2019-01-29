import React from "react";
import "./Todo.css"

function Todo(props) {
    return (
        <div className={props.todoItem.completed ? "todo completed" : "todo"}onClick={e => props.toggleCompleted(e, props.index)}>
            {props.todoItem.value}
        </div>
    )
}

export default Todo;

