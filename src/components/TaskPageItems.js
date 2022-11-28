const TaskPageItems = ({pageTask, timestampToString, timePassed, type}) => {
    console.log(pageTask.taskFile)
     

    return (
        <div className="taskPageItems" >
                <div>Номер задачи: {pageTask.taskNumber}</div>
                <div>Заголовок: {pageTask.taskHeader}</div>
                <div>Описание:<p>{pageTask.taskDescription}</p></div>
                <div>Дата создания: {timestampToString(pageTask.timeStamp)}</div>
                <div>Время в работе: {timePassed.secDiff + " секунд " + timePassed.minDiff + " минут " + timePassed.hourDiff + " часов "}</div>
                <div>Дата окончания: {pageTask.taskFinish}</div>
                <div>Приоритет: {pageTask.taskPriority}</div>
                {!(type === 'subtask') && <div>Текущий статус: {pageTask.taskStatus}</div>}
                <a target='_blank' href={pageTask.taskFile}>Загрузить вложенные файлы:</a>











            </div>
    )
}

export default TaskPageItems;