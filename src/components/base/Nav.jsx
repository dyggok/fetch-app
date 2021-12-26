import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <ul>
       
         {
           routes.filter((item, index) => item.isNav).map((item,index) => <li key={index} >
             <Link to={item.path}>{item.title}</Link>
           </li> )
         }
       
     </ul>
    </nav>
  );
}

export default Nav;
