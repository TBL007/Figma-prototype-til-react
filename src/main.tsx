import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/index.css'
import App from './App.tsx'
import Nav from './Components/Nav.tsx'
import {Quiz_Routes} from './quiz.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        
      </Routes>
      <Quiz_Routes/>
       <Nav />
    </BrowserRouter>
   
  </StrictMode>,
)
