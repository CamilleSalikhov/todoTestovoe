const ADD_COMMENT = "ADD_COMMENT";

const addComment = (payload) => {
    return {
        type:ADD_COMMENT,
        payload
    }

}

export {ADD_COMMENT, addComment}