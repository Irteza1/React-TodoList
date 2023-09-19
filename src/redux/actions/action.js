export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const GET_TASKS = 'GET_TASKS'
export const SEARCH_TASK = 'SEARCH_TASK'
export const addTask = (id, taskName, taskDescription) => {
    debugger
    return {
        type: ADD_TODO,
        payload: { id, taskName, taskDescription },
    };
};
export const updateTask = (id, taskName, taskDescription) => {
    return {
        type: UPDATE_TASK,
        payload: { id, taskName, taskDescription },
    };
};
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: { id },
    };
};
export const searchTask = (taskName) => {
    return {
        type: SEARCH_TASK,
        payload: {taskName },
    };
};