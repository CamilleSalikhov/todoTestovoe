import './Todo.css';

const SearchResult = ({taskHeader, taskNumber, id}) => {

    return (
    <div className="todoItem"  >
        <div className='taskNumber'>{taskNumber}</div>
        <div>{taskHeader}</div> 
    </div>
        
    )
}
export default SearchResult