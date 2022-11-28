import { useParams,  useHistory } from "react-router-dom";
import "./Modal.css";
import "./TaskPage.css"
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";

const TaskPage = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [subtaskVisible, setSubtaskVisible] = useState(false);


    const params = useParams();
    const history = useHistory();
    const id = params.taskId;
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

    return(
        <div className="taskPageContainer">
             {modalVisible && <Modal type= "change" pageTask={pageTask} modalHandler={modalHandler} />} 
             {subtaskVisible && <Modal   id={id} type= "subtask" modalHandler={subtaskHandler} />} 
            <div className="buttonContainer">
            <button className="submitSearch" onClick={modalHandler}    >Change</button>
            <button className="submitSearch" onClick={setSubtaskVisible}   >Subtask</button>
            <button className="submitSearch" onClick={handleBack}>Back</button>
             
            </div>
             
            <div className="taskPageItems" >
                <div>Номер задачи: {pageTask.taskNumber}</div>
                <div>Заголовок: {pageTask.taskHeader}</div>
                <div>Описание:<p>{pageTask.taskDescription}</p></div>
                <div>Дата создания: {timestampToString(pageTask.timeStamp)}</div>
                <div>Время в работе: {timePassed.secDiff + " секунд " + timePassed.minDiff + " минут " + timePassed.hourDiff + " часов "}</div>
                <div>Дата окончания: {pageTask.taskFinish}</div>
                <div>Приоритет: {pageTask.taskPriority}</div>
                <div>Вложенные файлы: {pageTask.TaskFile}</div>
                <div>Текущий статус: {pageTask.taskStatus}</div>











            </div>
             
             
            
        </div>
    )
}

export default TaskPage;