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
            return {
                ...state,
                todoList: [...state.todoList, newTodo]
            }
        default:
            return state;
    }
}