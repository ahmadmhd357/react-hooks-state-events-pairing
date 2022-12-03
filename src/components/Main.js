import React,{useState} from "react";


export default function Main ({data, setShowComment, showComment}){
    
  const {title, upvotes, downvotes, views, createdAt,  } = data;
  const [likeState, setlikeState] = useState(upvotes)
  const [disLikeState, setdisLikeState] = useState(downvotes)

function handlClick(e){
 e.target.name === 'like' ? setlikeState(currentState=>currentState + 1):
 setdisLikeState(currentState=>currentState + 1)
}

function handlToggle(){
    setShowComment(currentState=>currentState === true?false:true)
}
    return <div>
        <h1>{title} </h1>
        <h4>{views} Views | Uploaded {createdAt} </h4>
        <button name='like' onClick={handlClick} >{likeState}&#128077;</button>
        <button name="dislike" onClick={handlClick} >{disLikeState}&#128078;</button>
        <br/>
        <br/>
        <br/>
        <button onClick={handlToggle} >{showComment === true?"Hide the comments":'Show the comments'}</button>   
    </div>
}