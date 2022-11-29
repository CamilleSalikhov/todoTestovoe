import "./Table.css";
import Todo from "./Todo";
import { useSelector } from 'react-redux';
import { Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";


const Table = ({status}) => {


    
    const todoState = useSelector(state => state.todos[status]);
    
    
    const todos = todoState.map((e,index) =>
    <Todo index={index} key={uuidv4()} id = {e.id} taskHeader={e.taskHeader} taskNumber = {e.taskNumber} />
    );

    

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