import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'
import Register from './Register'
import Home from './home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [user, setuser] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/' element={<Login setuser={setuser}/> }></Route>
        <Route path='/home' element={<Home user={user} setuser={setuser}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
