import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

import { addNewTodo } from "../actions/index";

class TodoContainer extends React.Component {
    state = {
        newTodo: ""
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({newTodo: e.target.value})
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
    }

    render() {
        return (
            <>
                <div>
                    {this.props.todoList.map((todoItem, index) => {
                        return <Todo key={index} todoItem={todoItem}/>
                    })}
                    <form onSubmit={this.addTodo}>
                        <input 
                        type="text" 
                        placeholder="New Todo"
                        onChange={this.handleChanges} 
                        />
                        <button type="submit">Add Todo</button>
                    </form>
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
export default connect (mapStateToProps,
    { addNewTodo }
    )(TodoContainer);