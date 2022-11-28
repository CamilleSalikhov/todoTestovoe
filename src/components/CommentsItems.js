import './Comments.css';
import { useSelector } from 'react-redux';
import CommentsItem from './CommentsItem';
import { v4 as uuidv4 } from 'uuid';
import "./CommentsItems.css"

const CommentsItems = ({id : pageId}) => {
    const comments = useSelector(state => state.comments.filter(e => e.pageId === pageId && e.parentId === null));
    // console.log(comments, 'comments');
    const commentComponents = comments.map(e =>
    <CommentsItem 
    key = {uuidv4()} 
    item = {e}
    hasReplies = {e.parentId ? true : false} 
    />)


    return (
        <div className="commentsItemsContainer">
            {commentComponents}
        </div>
    )
};


export default CommentsItems;