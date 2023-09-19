import { ADD_TODO } from '../actions/action.js';
import { tasks } from '../../Service/Tasks';
import { UPDATE_TASK } from '../actions/action.js';
import { DELETE_TASK } from '../actions/action.js';
import { SEARCH_TASK } from '../actions/action.js';
const initialState = {
    tasks: tasks,
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            debugger
            state.tasks.push(action.payload);
            return {
                ...state
            };
        case UPDATE_TASK:
            state.tasks.forEach((task) => {
                if (task.id === action.payload.id) {
                    task.taskName = action.payload.taskName
                    task.taskDescription = action.payload.taskDescription
                }
            })
            return {
                ...state
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((obj) => obj.id !== action.payload.id)
            };
        case  SEARCH_TASK:

            let search = state.tasks.filter((task) =>task.taskName.includes(action.payload.taskName));
            debugger
            if(action.payload.taskName){
                return {...state,tasks:search}
            } 
            else return {...initialState}
        default:
            return state;
    }
};

export default rootReducer;
