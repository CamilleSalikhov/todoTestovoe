import "./Table.css";
import Todo from "./Todo";
import { useSelector } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { updateTable } from "../store/actions/dragUpdate";
import { v4 as uuidv4 } from "uuid";


const Table = ({status}) => {


    // const dispatch = useDispatch();
    const todoState = useSelector(state => state.todos[status]);
    //console.log(todoState)
    //console.log(currentTodos)
    const todos = todoState.map((e,index) =>
    <Todo index={index} key={uuidv4()} id = {e.id} taskHeader={e.taskHeader} taskNumber = {e.taskNumber} />
    );

    


    // const handleOnDragEnd = ( e) => {
    //     console.log(e)
    //     if (!e.destination) return;

        

    // const todoItems = [].concat(todoState);
    // const [cutOutItem] = todoItems.splice(e.source.index, 1);
    // todoItems.splice(e.destination.index, 0, cutOutItem);




    //      dispatch(updateTable(
    //         {
    //             status,
    //             value: todoItems
    //         }
    //      ));

    // }

    return(
    <Droppable droppableId = {'Id' + status}>
                {(provided) => {
                    return (<div className="table" ref ={provided.innerRef} {...provided.droppableProps}>   
                    {todos}
                    {provided.placeholder}
                    </div>
                    
                    )
                     

                }}
          
    </Droppable>
        
    )
}

export default Table;