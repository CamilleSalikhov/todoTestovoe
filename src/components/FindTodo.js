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
     
    const todoArray = [].concat(todoState.development, todoState.done, todoState.queue);


    const handleSearch = (e) => {
        e.preventDefault();
        const checkSearch = todoArray.find(e => e.taskHeader === taskHeader.trim() && e.taskNumber === taskNumber.trim());
         
        if (!checkSearch) {
            setPvalue('Не найдено!');
            setSearchTarget('')
        } else {
            setPvalue('Найдено!');
            setSearchId(checkSearch.id);
            setSearchTarget(checkSearch);
             
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
             
            {searchTarget && <SearchResult modalHandler = {modalHandler} id={searchId} taskHeader = {searchTarget.taskHeader} taskNumber = {searchTarget.taskNumber} />}
        </div>
        </ModalWrapper>
    )
};


export default FindTodo;