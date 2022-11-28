import './Todo.css';
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { useHistory } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';
 

const Todo = ({taskHeader, taskNumber, id, index}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/tasks/${id}`)
    }

    return(
        <Draggable draggableId = {uuid4()} index = {index}>
            { (provided) => {
                return (
                    <div onClick={handleClick} className="todoItem" {...provided.draggableProps} {...provided.dragHandleProps} ref = {provided.innerRef} >
                <div className='taskNumber'>{taskNumber}</div>
                <div>{taskHeader}</div> 
                 
            </div>


                )



            }



            }
         
             
         
        </Draggable>
    )
}

export default Todo;