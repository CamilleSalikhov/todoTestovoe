 import './CommentsItem.css';
 import './FindTodo.css';
 import { useState } from 'react';
 import CommentsForm from './CommentsForm';
 import { useSelector } from 'react-redux';
 import { v4 as uuid4 } from 'uuid';





const CommentsItem = ({item, hasReplies}) => {




const replies = useSelector(state => {
    let result = state.comments.filter(e => e.parentId === item.id)
    return result
})

console.log(replies, 'replies')


const [replyVisible,setReplyVisible] = useState(false);



const date = new Date(item.timeStamp);


const closeReply = () => {
    setReplyVisible(false)
}

const openReply = () => {
    setReplyVisible(true)
}



const creationDate = date.getDate()+
            "/"+(date.getMonth()+1)+
            "/"+date.getFullYear()
            // +
        //   " "+date.getHours()+
        //   ":"+date.getMinutes()+
        //   ":"+date.getSeconds();

let currentClass = "commentItem";

if (hasReplies) {
    currentClass = 'replyItem'
}


let replyComponents;
let replyComponentsMap;
if (replies[0]) {
    replyComponentsMap = replies.map(e =>
     
        
     <CommentsItem
    key = {uuid4()}
    item ={e} 
    hasReplies = {e.parentId ? true : false}/>
     );

     replyComponents =<div style={{color:"red", display:' flex', flexDirection:"row"}}>
        {replyComponentsMap}
     </div>
}


    
    

    return (<>
        <div className="commentItem">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" 
        alt="userpic" />
        <div className='flexContainer2'>
        <div className='commentTitle'>{`${item.userName} : ${creationDate}`}</div>
        <div>{item.textArea}</div>
        {!replyVisible && <button onClick={openReply} className='submitSearch reply'>reply</button>}
        </div>
          
         
        
        </div>
         
        {replyVisible && <CommentsForm item ={item} type = 'reply' closeReply={closeReply} id={item.pageId} />}
        {replyComponents}
        </>
    )
}

export default CommentsItem;