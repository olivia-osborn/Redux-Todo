export const ADD_TODO = "ADD_TODO";

export function addNewTodo(newTodo) {
    console.log("action", newTodo)
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}