import React from 'react';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Blog/>
            <Contact />
        </div>
    );
};

export default Main;