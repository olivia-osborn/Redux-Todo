import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";

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
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todoList: state.todoList.map((todoItem, index) => 
                    action.payload === index 
                    ? {...todoItem, completed: !todoItem.completed} 
                    : todoItem
                )
            };
        default:
            return state;
    }
}

export default reducer;