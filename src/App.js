import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/project-1" element={<Project1/>} />
            <Route exact path="/project-2" element={<Project2/>} />
            <Route exact path="/project-3" element={<Project3/>} />
            <Route exact path="/project-4" element={<Project4/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/*" element={<NotFound/>} />
        </Routes>
    );
};

export default App;