import { useParams,  useHistory, useLocation } from "react-router-dom";
import "./Modal.css";
import "./TaskPage.css"
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import TaskPageItems from "./TaskPageItems";
import { v4 as uuid4 } from "uuid";

const TaskPage = () => {
    const location = useLocation();
     
    const [modalVisible, setModalVisible] = useState(false);
    const [subtaskVisible, setSubtaskVisible] = useState(false);


    const params = useParams();
    const history = useHistory();
    const id = params.taskId || location.state;
    const state = useSelector(state => state.todos)
    const stateArray = [...state.queue, ...state.development, ...state.done];
    const pageTask = stateArray.find(e => e.id === id);
    
 
     
     

    const handleBack = () => {
        history.push('/');
    };





   
   
   
     

    const modalHandler = () =>  {
        setModalVisible((prevState) => {
            return !prevState
        
        })
    };

    const subtaskHandler = () => {
        setSubtaskVisible(prevState => {
            return !prevState
        })

    }

     



    const timestampToString = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString()
    };

    const calculateTime = (startTime) => {
        const timeDiff = Date.now() - startTime;
        const secDiff = Math.floor(timeDiff/1000);
        const minDiff = Math.floor(secDiff/60);
        const hourDiff = Math.floor(minDiff/60)
        return {
            secDiff,
            minDiff,
            hourDiff
        }
    };

    const timePassed = calculateTime(pageTask.timeStamp);


    const renderSubTasks = pageTask.subTasks.map(
        (e, index) => <TaskPageItems key={uuid4()} pageTask={pageTask.subTasks[index]} timestampToString={timestampToString} timePassed ={timePassed} />
    )

    return(
        <div className="taskPageContainer">
             {modalVisible && <Modal type= "change" pageTask={pageTask} modalHandler={modalHandler} />} 
             {subtaskVisible && <Modal   id={id} pageTask={pageTask} type= "subtask" modalHandler={subtaskHandler} />} 
            <div className="buttonContainer">
            <button className="submitSearch" onClick={modalHandler}    >Change</button>
            <button className="submitSearch" onClick={setSubtaskVisible}   >Subtask</button>
            <button className="submitSearch" onClick={handleBack}>Back</button>
             
            </div>
            <TaskPageItems pageTask={pageTask} timestampToString={timestampToString} timePassed ={timePassed} />
            
            <p>Здесь будут ваши дополнительные задачи</p>
             {renderSubTasks}
             
             
            
        </div>
    )
}

export default TaskPage;