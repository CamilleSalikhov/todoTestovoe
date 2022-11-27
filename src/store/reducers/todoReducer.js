import { act } from "react-dom/test-utils";
import { ADD_TODO } from "../actions/addTodo";
import { SET_WHOLE_STATE } from "../actions/setWholeState";
import { DRAG_UPDATE  } from "../actions/dragUpdate";
import { DRAG_INSIDE  } from "../actions/dragInside";


const  initialState = {
    queue: [],
    development: [],
    done : []
}



function todoReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            console.log(state )
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
        default:
                return state
                
    }
}


export default todoReducer;