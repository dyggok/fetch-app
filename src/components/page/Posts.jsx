import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Posts(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        setTimeout(() => {fetch(URL)
          .then(response => response.json())
          .then(json => {
            setData(json)
            setLoading(false)  
          }  
            )},1000)
             
    } , [])

    if(loading){
      return <h1>Yükleniyor...</h1>
    }

    return <>
        <h1>Posts</h1>
            <ul>
                {
                    data.map((item,index) => <li key={index}><Link to={`${item.id}`}>{item.title}</Link></li> )
                }
            </ul>
        </>
}

export default Posts;