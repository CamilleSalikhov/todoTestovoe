import './Comments.css';
import CommentsForm from './CommentsForm';
import CommentsItems from './CommentsItems';



const Comments = ({pageTask}) => {
    return (
        <div className="commentsContainer">
            <h1>Комментарии</h1>
            <CommentsForm type = 'post' id = {pageTask.id} />
            <CommentsItems id = {pageTask.id} />
        </div>
    )
}

export default Comments;