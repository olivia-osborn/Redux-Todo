import React from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { connect } from "react-redux";

import { addNewTodo, toggleCompletedTask } from "../actions/index";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: auto;
`

const StyledInput = styled.input`
    font-size: 1rem;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 5px;
    width: 200px;

`

const StyledButton = styled.button `
    font-size: 1rem;    
    background: lightblue;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
    width: 200px;
    &:hover {
        cursor: pointer;
        background: rgb(112, 202, 231);
    }

`

class TodoContainer extends React.Component {
    state = {
        newTodo: ""
    }

    handleChanges = e => {
        this.setState({newTodo: e.target.value})
    }

    addTodo = e => {
        e.preventDefault();
        if (this.state.newTodo) {
            this.props.addNewTodo(this.state.newTodo)}
    }

    toggleCompleted = (e, idx) => {
        e.preventDefault();
        console.log("click!")
        this.props.toggleCompletedTask(idx)
    }

    render() {
        return (
            <>
                <div>
                    {this.props.todoList.map((todoItem, index) => {
                        return <Todo 
                            key={index} 
                            todoItem={todoItem} 
                            index={index}
                            toggleCompleted={this.toggleCompleted}
                        />
                    })}
                    <StyledForm onSubmit={this.addTodo}>
                        <StyledInput
                        type="text" 
                        placeholder="New Todo"
                        onChange={this.handleChanges} 
                        />
                        <StyledButton type="submit">Add Todo</StyledButton>
                    </StyledForm>
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
    { addNewTodo, toggleCompletedTask }
    )(TodoContainer);