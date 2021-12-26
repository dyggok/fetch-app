import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function PostDetail(){
    const params = useParams();
    const {postId} = params;
    const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.text())
      .then(result => {
        setData(JSON.parse(result))
      })
      .catch(error => console.log('error', error))  
    },  
    [])
    
    
    return <> 
    <h1>PostDetail</h1>
    <div className="card">
        <div className="card-body">
        <h5 className="card-title">{data.id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{data.title}</h6>
        <p className="card-text">{data.body}</p>
        </div>
    </div>
    </>
}

export default PostDetail;