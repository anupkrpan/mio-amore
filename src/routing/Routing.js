import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Category from '../pages/category/Category';
import NotFound from '../pages/notfound/NotFound'; 

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} /> 
        <Route path="*" element={<NotFound />} />       
      </Routes>
    </Router>
  )
}

export default Routing 