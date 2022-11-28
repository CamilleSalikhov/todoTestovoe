import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Modal.css';
import {addTodo} from '../store/actions/addTodo';
import ModalWrapper from './ModalWrapper';
import {v4 as uuidv4} from 'uuid';
import { changeTask } from '../store/actions/changeTask';
import { addSubtask } from '../store/actions/addSubtask';



const Modal = ({modalHandler, type, id, pageTask}) => {
    const [taskNumber, setTaskNumber] = useState('');
    const [taskHeader, setTaskHeader] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskFinish, setTaskFinish] = useState('');
    const [taskPriority, setTaskPriority] = useState('');
    const [taskFile, setTaskFile] = useState("Файл не выбран");
    const [fileName, setFileName] = useState('')
     
     

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
         
        


        dispatch(addTodo({
            taskNumber : taskNumber.trim(),
            taskHeader : taskHeader.trim(),
            taskDescription : taskDescription,
            taskFinish,
            taskPriority: taskPriority.trim(),
            taskFile,
            timeStamp: Date.now(),
            taskStatus: 'queue',
            id: uuidv4(),
            subTasks:[]
        }));

        modalHandler();
        



    };

    const handleTaskChange = (e) => {
        e.preventDefault();
        const currentFile = (taskFile ? taskFile : pageTask.taskFile)

        dispatch(changeTask({
            taskNumber : taskNumber.trim(),
            taskHeader : taskHeader.trim(),
            taskDescription : taskDescription,
            taskFinish,
            taskPriority: taskPriority.trim(),
            taskFile:currentFile,
            timeStamp: pageTask.timeStamp,
            taskStatus: pageTask.taskStatus,
            id: pageTask.id,
            subTasks:pageTask.subTasks
        }));

        modalHandler();





         
    };

    const handleSubtask = (e) => {
        e.preventDefault();
         

        dispatch(addSubtask({
            taskNumber : taskNumber.trim(),
            taskHeader : taskHeader.trim(),
            taskDescription : taskDescription,
            taskFinish,
            taskPriority: taskPriority.trim(),
            timeStamp: Date.now(),
            id,
            parentStatus:pageTask.taskStatus,
            taskFile
        }));

        modalHandler()






    }





    const handleNumber = (e) => {
        setTaskNumber(e.target.value)

        



    };

    const handleHeader = (e) => {
        setTaskHeader(e.target.value)

        



    };

    const handleDescription = (e) => {
        setTaskDescription(e.target.value)

        



    };



    const handleFinish = (e) => {
         setTaskFinish(e.target.value)

        



    };

    const handlePriority = (e) => {
        setTaskPriority(e.target.value)

        



    };

    const handleFiles = (e) => {
        const objUrl = URL.createObjectURL(e.target.files[0]);
        //console.log(e.target.files[0]);
        setTaskFile(objUrl);
        setFileName(e.target.files[0].name)
         

    };

    let currentHandler = '';
    let buttonValue = 'button';
    if (type === 'add') {
        currentHandler = handleSubmit;
        buttonValue = "Add todo";
    } else if (type === 'change') {
        currentHandler = handleTaskChange;
        buttonValue = "Change";
    } else if (type === 'subtask') {
        currentHandler = handleSubtask;
        buttonValue = "SubTask"
    }

     

     

    return(
        <>
                 <ModalWrapper modalHandler ={modalHandler}>
                <form onSubmit={currentHandler} >
                    <div className='formItems'> 
                    <label htmlFor="taskNumber">Номер задачи</label>
                    <input
                    required
                    type="text"
                    id="taskNumber"
                    value={taskNumber}
                    onChange={handleNumber}
                    /> 
                    <label htmlFor="taskHeader">Заголовок</label>
                    <input
                    required
                    type="text"
                    id="taskHeader"
                    value={taskHeader}
                    onChange={handleHeader}
                    /> 
                    <label htmlFor="taskDescription">Описание</label>
                    <textarea
                     
                    id="taskDescription"
                    value={taskDescription}
                    onChange={handleDescription}
                    /> 
                    <label htmlFor="taskDeadline">Дата окончания</label>
                    <input
                    required
                    type="date"
                    id="taskDeadline"
                    value={taskFinish}
                    onChange={handleFinish}
                    /> 
                    <label htmlFor="taskPriority">Приоритет</label>
                    <input
                    required
                    type="text"
                    id="taskPriority"
                    value={taskPriority}
                    onChange={handlePriority}
                    /> 

                     
                    <label className='uploadLabel' htmlFor="taskFiles">
                    Добавить файлы            
                    </label>
                    <span className='fileInputDesc'  id="file-chosen">{fileName} </span>
                    <input
                    type="file"
                    id="taskFiles"
                    onChange={handleFiles} 
                    hidden
                    />
                     

 
                    <div className='formSubmit'>
                    <button className='submitButton' type='sumbit'>{buttonValue}</button>
                    </div>
                </div>
                </form>
                </ModalWrapper>
        </>
        
        

    )
};

export default Modal;