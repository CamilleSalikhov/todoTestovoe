import { useState } from 'react';
import './FindTodo.css';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import ModalWrapper from './ModalWrapper';
import './Modal.css';
import SearchResult from './SearchResult';

const FindTodo = ({modalHandler}) => {

    const [taskNumber, setTaskNumber] = useState('');
    const [taskHeader, setTaskHeader] = useState('');
    const [searchTarget, setSearchTarget] =useState('');
    const [pValue, setPvalue] = useState('');
    const [searchId, setSearchId] =useState('');
     

    const todoState = useSelector(state => state.todos);
     
    const todoArray = todoState.queue.concat(todoState.development, todoState.done);


    const handleSearch = (e) => {
        e.preventDefault();
        const checkSearch = todoArray.filter(e => e.taskHeader === taskHeader && e.taskNumber === taskNumber);
        setSearchTarget(checkSearch[0]) ;
        console.log(checkSearch)
        if (!checkSearch[0]) {
            setPvalue('Не найдено!')
        } else {
            setPvalue('Найдено!');
            setSearchId(e.id);
             
        }
         
    };

    const handleNumber = (e) => {
        setTaskNumber(e.target.value)

    };

    const handleHeader = (e) => {
        setTaskHeader(e.target.value)
    }

     

    return (
        <ModalWrapper modalHandler = {modalHandler}>
        <div className="findContainer">
            <h1>Найти таск</h1>
            <form onSubmit={handleSearch}>
                <div className='searchContainer'>
                <label htmlFor="searchNumber">Номер</label>
                <input type="text" id="searchNumber" onChange={handleNumber} value={taskNumber} />
                <label htmlFor="searchPriority">Заголовок</label>
                <input type="text" id="searchHeader" onChange={handleHeader} value={taskHeader} /> 
                <button   className='submitSearch' type="submit">Найти</button>
                <p>{pValue}</p>
                </div>  
            </form>
             
            {searchTarget && <SearchResult id={searchId} taskHeader = {searchTarget.taskHeader} taskNumber = {searchTarget.taskNumber} />}
        </div>
        </ModalWrapper>
    )
};


export default FindTodo;