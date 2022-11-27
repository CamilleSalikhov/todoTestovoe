import './Todo.css';
import { useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
 

const Todo = ({taskHeader, taskNumber, id, index}) => {
console.log(id, id)

    return(
        <Draggable draggableId = {id} index = {index}>
            { (provided) => {
                return (
                    <div className="todoItem" {...provided.draggableProps} {...provided.dragHandleProps} ref = {provided.innerRef} >
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