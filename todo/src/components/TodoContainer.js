import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoContainer extends React.Component {
    state = {
        newTodo: {
            value: "",
            completed: false
        }
    }

    addTodo = e => {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <div>
                    {this.props.todoList.map(todoItem => {
                        return <Todo todoItem={todoItem}/>
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}
export default connect (mapStateToProps)(TodoContainer);