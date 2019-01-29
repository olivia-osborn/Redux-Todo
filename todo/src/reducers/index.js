import { ADD_TODO } from "../actions";

const initialState = {
    todoList: [
    {
        value: "Walk the dog",
        completed: false
    }
    ]
}

function reducer(state= initialState, action) {
    switch (action.type) {
        case ADD_TODO:
        const newTodo = {
            value: action.payload,
            completed: false
        }
            return {
                ...state,
                todoList: [...state.todoList, newTodo]
            }
        default:
            return state;
    }
}

export default reducer;