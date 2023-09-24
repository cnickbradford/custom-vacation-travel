import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/header-and-footer/header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about-page/About.jsx'
import Agent from './components/agent-page/Agent.jsx'
import Quote from './components/quote/Quote.jsx'
import Contact from './components/contact-us/Contact.jsx'


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
