import './Comments.css';
import './FindTodo.css'
import './CommentsForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../store/actions/addComment';
import { v4 as uuid4 } from 'uuid';


const CommentsForm = ({id, closeReply, type, item}) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('')
    const [textArea, setTextArea] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment({
            userName,
            textArea,
            pageId: id,
            id:uuid4(),
            timeStamp: Date.now(),
            parentId: null
        }));

         
    };

    const handleReply = (e) => {
        e.preventDefault();

        dispatch(addComment({
            userName,
            textArea,
            pageId:id,
            id: uuid4(),
            timeStamp: Date.now(),
            parentId:item.id

        }))



        closeReply()
    }



    const handleTextarea = (e) => {
        setTextArea(e.target.value)
    };

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    let currentHandler = handleSubmit;

    if (type === 'post') {
        currentHandler = handleSubmit
    } else if (type === 'reply') {
        currentHandler = handleReply
    }

    
    return (
        <div className="commentsFormCOntainer">
            <form onSubmit={currentHandler}>    
            <div className='postItems' >
            <label htmlFor="userName">Имя</label>
                    <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={handleUserName}
                    required
                    /> 

            <textarea  name="content" type="text" placeholder="" 
            rows="10" cols="50" value={textArea} onChange={handleTextarea} required   >   
            </textarea>

            <div className='formButtons'>
            <button className="submitSearch" >Post</button>
            {type === 'reply' &&<button type='button' onClick={closeReply} className="submitSearch" >Close</button>}
            </div>
            </div>
            </form>
            
        </div>
    )
};


export default CommentsForm;