import "./Table.css";
import Todo from "./Todo";
import { useSelector } from 'react-redux';


const Table = ({status}) => {

    const todoState = useSelector(state => state.todos.queue);
    console.log(todoState)
    const currentTodos = todoState.filter(e => e.taskStatus === status)
    console.log(currentTodos)
    const todos = currentTodos.map(e => <Todo taskHeader={e.taskHeader} taskNumber = {e.taskNumber} />)



    return(
        <div className="table">
            <h3>{status}</h3>
            {todos}
        </div>
    )
}

export default Table;