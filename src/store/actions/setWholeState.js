const SET_WHOLE_STATE ='SET_WHOLE_STATE';

const setWholeState = (payload) => {
    return {
        type:SET_WHOLE_STATE,
        payload
    }
}

export {SET_WHOLE_STATE, setWholeState}