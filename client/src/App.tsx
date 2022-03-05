import {useEffect, useState} from 'react'
import logo from './logo.svg'
import {BrowserRouter, Route,Routes, Link } from 'react-router-dom'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Project from './components/project/project'
import './App.css'
import './assets/css/style.css'
import './assets/css/carousel.css'
import './assets/css/style.css'
import { getLog } from './services/project'
function App() {
  useEffect(()=>{
      getLog({path:'/'})
  })
  return (



    <div className="App">
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/project/:id" element={<Project/>} />
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>

  )
}

export default App
