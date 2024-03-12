import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Todo from './pages/Todo'
import Nav from './component/Nav'
import SignPage from './component/SignPage'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<SignPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
