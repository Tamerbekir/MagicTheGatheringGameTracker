import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Game from './pages/Game'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/game' element={<Game/>}/>
    </Routes>
    </>
  )
}

export default App
