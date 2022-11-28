import { act } from "react-dom/test-utils";
import { ADD_TODO } from "../actions/addTodo";
import { SET_WHOLE_STATE } from "../actions/setWholeState";
import { DRAG_UPDATE  } from "../actions/dragUpdate";
import { DRAG_INSIDE  } from "../actions/dragInside";
import { CHANGE_TASK } from "../actions/changeTask";


const  initialState = {
    queue: [],
    development: [],
    done : []
}



function todoReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                queue: [...state.queue, action.payload]
            }
         
        case DRAG_UPDATE:
            return {
                ...state,
                ...action.payload[0],
                ...action.payload[1]
            }

        case DRAG_INSIDE:
            return {
                ...state,
                ...action.payload
            }
        case CHANGE_TASK:
            return {
                ...state,
                [action.payload.taskStatus]: state[action.payload.taskStatus].map(
                    (element) => element.id === action.payload.id ? action.payload : element 


                )
            }
        default:
                return state
                
    }
}


export default todoReducer;