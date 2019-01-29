import React from "react";

function Todo(props) {
    return (
        <div onClick={e => props.toggleCompleted(e, props.index)}>
            {props.todoItem.value}
        </div>
    )
}

export default Todo;

