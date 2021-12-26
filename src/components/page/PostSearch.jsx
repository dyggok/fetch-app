import React, { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import PostDetail from './PostDetail';
import Posts from './Posts';

function PostSearch(props) {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const [q, setQ] = useState(urlParams.get('q'));
  const navigate = useNavigate();
  
  function formHandler(event){
    event.preventDefault();
    console.log(event.target.q.value)
    setQ(event.target.q.value);  
    navigate(`/search-post?q=${event.target.q.value}`);
      
  }

  return (
    <>
    <form onSubmit={formHandler}>
    <div className="m-3">
      <label htmlFor="search" className="form-label">Search</label>
      <input name='q' type="text" className="form-control" id="search" defaultValue={q}/>
    </div>
    <button type="submit" className="m-3 btn btn-primary">Search</button>
    </form>
    
    {
      location.pathname === '/search-post' && <h4 className="m-3">Arama Sonuclari: {q}</h4>
     
    }
  
  
    </>
  );
}

export default PostSearch;
