import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Modal.css';
import {addTodo} from '../store/actions/addTodo';
import ModalWrapper from './ModalWrapper';
import {v4 as uuidv4} from 'uuid';



const Modal = ({modalHandler}) => {
    const [taskNumber, setTaskNumber] = useState('');
    const [taskHeader, setTaskHeader] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskFinish, setTaskFinish] = useState('');
    const [taskPriority, setTaskPriority] = useState('');
    const [taskFile, setTaskFile] = useState("Файл не выбран");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        


        dispatch(addTodo({
            taskNumber : taskNumber.trim(),
            taskHeader : taskHeader.trim(),
            taskDescription : taskDescription,
            taskFinish,
            taskPriority: taskPriority.trim(),
            taskFile,
            timeStamp: Date.now(),
            taskStatus: 'queue',
            id: uuidv4()
        }));

        modalHandler();
        



    };

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
        let files = [];
        //console.log(e.target.files[0]);
        setTaskFile(e.target.files[0]);
         

    };


 

    return(
        <>
                 <ModalWrapper modalHandler ={modalHandler}>
                <form onSubmit={handleSubmit} >
                    <div className='formItems'> 
                    <label htmlFor="taskNumber">Номер задачи</label>
                    <input
                    type="text"
                    id="taskNumber"
                    value={taskNumber}
                    onChange={handleNumber}
                    /> 
                    <label htmlFor="taskHeader">Заголовок</label>
                    <input
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
                    type="date"
                    id="taskDeadline"
                    value={taskFinish}
                    onChange={handleFinish}
                    /> 
                    <label htmlFor="taskPriority">Приоритет</label>
                    <input
                    type="text"
                    id="taskPriority"
                    value={taskPriority}
                    onChange={handlePriority}
                    /> 
                    <label className='uploadLabel' htmlFor="taskFiles">
                    Добавить файлы            
                    </label>
                    <span className='fileInputDesc'  id="file-chosen">{ taskFile.name} </span>
                    <input
                    type="file"
                    id="taskFiles"
                    onChange={handleFiles}
                    hidden
                    /> 

 
                    <div className='formSubmit'>
                    <button className='submitButton' type='sumbit'>Add todo</button>
                    </div>
                </div>
                </form>
                </ModalWrapper>
        </>
        
        

    )
};

export default Modal;