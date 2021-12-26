import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/page/Home';
import About from './components/page/About';
import Contact from './components/page/Contact';
import PostDetail from './components/page/PostDetail';
import Posts from './components/page/Posts';
import routes from './routes';
import Nav from './components/base/Nav';
import Footer from './components/base/Footer';

function App() {
  return (
      <div>
        <Nav/>
        <Routes>
          {
            routes.map((item, index) => <Route key={index} path={item.path} element={<item.element/>}/> )
          }
        </Routes>
        <Footer/>   
      </div>  
  );
}

export default App;
