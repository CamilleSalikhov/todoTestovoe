import './Todo.css';
import { useHistory } from 'react-router-dom';

const SearchResult = ({taskHeader, taskNumber, id, modalHandler}) => {
    const history = useHistory();

    const handleClick = () => {
        modalHandler()
        history.push({
            pathname: `/tasks/${id}`,
            state: id
        });

    }

     

    return (
    <div className="todoItem" onClick={handleClick}  >
        <div className='taskNumber'>{taskNumber}</div>
        <div>{taskHeader}</div> 
    </div>
        
    )
}
export default SearchResult