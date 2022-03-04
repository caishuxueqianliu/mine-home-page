import { useState } from 'react'
import logo from './logo.svg'
import {HashRouter, Route,Routes, Link } from 'react-router-dom'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Project from './components/project/project'
import './App.css'
import './assets/css/style.css'
import './assets/css/carousel.css'
import './assets/css/style.css'
function App() {
  const [count, setCount] = useState(0)

  return (



    <div className="App">
      <Header/>
      <HashRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/project/:id" element={<Project/>} />
          </Routes>
      </HashRouter>
      <Footer/>
    </div>

  )
}

export default App
