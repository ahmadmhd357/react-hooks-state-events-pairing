import { useState } from "react";
import video from "../data/video.js";
import CommentsList from "./CommentsList.js";
import Main from "./Main.js";
function App() {
  
 const [showComment, setShowComment]= useState(true)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Main data={video} showComment={showComment} setShowComment={setShowComment} />

      <CommentsList comments={video.comments} showComment={showComment} />



    </div>
    
  );
}

export default App;
