import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './index.jsx'
import Navbar from './Navbar.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import ContactMe from './ContactMe.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <ContactMe/>
    <Footer/>
  </React.StrictMode>,
)
