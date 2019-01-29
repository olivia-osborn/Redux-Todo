import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "../actions";

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
        case DELETE_TODO:
            console.log("payload", action.payload)
            return {
                ...state,
                todoList: state.todoList.filter(function(item, idx) {
                    return idx !== action.payload
                })
            }
        default:
            return state;
    }
}

export default reducer;