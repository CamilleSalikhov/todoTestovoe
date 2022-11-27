import './Todo.css';
import { useSelector } from 'react-redux';
 

const Todo = ({taskHeader, taskNumber}) => {


    return(
        <div className="todoItem">
            <div className='taskNumber'>{taskNumber}</div>
            <div>{taskHeader}</div>
             
        </div>
    )
}

export default Todo;