import { act } from "react-dom/test-utils";
import { ADD_TODO } from "../actions/addTodo";
import { SET_WHOLE_STATE } from "../actions/setWholeState";


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
        case SET_WHOLE_STATE:
            return action.payload
            default:
                return state
    }
}


export default todoReducer;