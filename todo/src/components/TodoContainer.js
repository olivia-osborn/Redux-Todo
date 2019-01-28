import React from "react";
import Todo from "./Todo";

function TodoContainer(props) {
    return (
        <div>
            {props.todoList.map(todoItem => {
                return <Todo todoItem={todoItem}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}
export default TodoContainer;