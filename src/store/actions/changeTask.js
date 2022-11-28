const CHANGE_TASK = 'CHANGE_TASK'

const changeTask = (object) => {

    return {
        type:  CHANGE_TASK,
        payload: object
    }
}



export { CHANGE_TASK, changeTask}
