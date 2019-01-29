export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export function addNewTodo(newTodo) {
    console.log("action", newTodo)
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}

export function toggleCompletedTask(index) {
    console.log("action", index)
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    }
}