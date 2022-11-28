const TaskPageItems = ({pageTask, timestampToString, timePassed}) => {
    return (
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
    )
}

export default TaskPageItems;