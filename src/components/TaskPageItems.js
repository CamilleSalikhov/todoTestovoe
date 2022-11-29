import './TaskPageItems.css'

const TaskPageItems = ({pageTask, timestampToString, timePassed, type}) => {
    
     

    return (
        <div className="taskPageItems" >
                <div>Номер задачи: {pageTask.taskNumber}</div>
                <div>Заголовок: {pageTask.taskHeader}</div>
                <div>Описание:<p>{pageTask.taskDescription}</p></div>
                <div>Дата создания: <p>{timestampToString(pageTask.timeStamp)}</p></div>
                <div>Время в работе: <p>{timePassed.secDiff + " секунд " + timePassed.minDiff + " минут " + timePassed.hourDiff + " часов "}</p></div>
                <div>Дата окончания: <p>{pageTask.taskFinish}</p></div>
                <div>Приоритет: {pageTask.taskPriority}</div>
                {!(type === 'subtask') && <div>Текущий статус: <p>{pageTask.taskStatus}</p></div>}
                <a target='_blank' rel="noopener noreferrer" href={pageTask.taskFile}>Cкачать вложенные файлы</a>











            </div>
    )
}

export default TaskPageItems;