import "./FindTodo.css";
import './NotFound.css';
import { useHistory } from "react-router-dom";
const NotFound = () => {

    const history = useHistory();
    
    const handleClick = () => {
        history.push('/tasks')
    }




    return(
    <div className="notfoundContainer">
        <h1 >Not found</h1>
        <button onClick={handleClick} className="submitSearch">Back</button>
    </div>
    )
}

export default NotFound;