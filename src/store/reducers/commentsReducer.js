import { ADD_COMMENT } from "../actions/addComment";

const  initialState = []



function commentsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [
                ...state,
                action.payload    
            ]
         
        default:
            return state
                
    }
}


export default commentsReducer;