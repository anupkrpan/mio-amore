import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Category from '../pages/category/Category';
import NotFound from '../pages/notfound/NotFound'; 
import Aboutus from '../pages/aboutus/Aboutus';
import Counter from '../pages/counter/Counter';
import Fakeapi from '../pages/fakeapi/Fakeapi';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} /> 
        <Route path="/aboutus" element={<Aboutus />} /> 
        <Route path="/counter" element={<Counter />} />
        <Route path="/fakeapi" element={<Fakeapi />} />
        <Route path="*" element={<NotFound />} />       
      </Routes>
    </Router>
  )
}

export default Routing 