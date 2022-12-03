import React from "react";


export default function CommentsList({comments, showComment}){

   const commentsToDisplay = showComment === true? comments.map(commentt=><div className="comment">
   <h3>{commentt.user}</h3>
   <p>{commentt.comment}</p>
   </div>):null;
   return <div>
        <h1>{comments.length} Comments</h1>
        {commentsToDisplay}
    </div>
}