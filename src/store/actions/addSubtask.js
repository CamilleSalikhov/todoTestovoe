const ADD_SUBTASK = "ADD_SUBTASK";

const addSubtask = (payload) => {
    return {
        type:ADD_SUBTASK,
        payload
    }

}

export {ADD_SUBTASK, addSubtask}