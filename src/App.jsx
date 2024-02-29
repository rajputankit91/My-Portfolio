import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Experiences from './components/experience/Experiences'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Experiences /> */}
    </div>
      
  )
}

export default App
