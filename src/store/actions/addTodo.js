const ADD_TODO = 'ADD_TODO'

const addTodo = (object) => {

    return {
        type:  ADD_TODO,
        payload: object
    }
}



export { addTodo, ADD_TODO}
