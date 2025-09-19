

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import LogIn from './Pages/LogIn'
import Contact from './Pages/Contact'
import News from './Pages/News'
import Residents from './Pages/Residents'
import AdminDashboard from './Pages/AdminDashboard'


function App() {
  

  return (
    <>
    <Routes >
      <Route path='/' element={<Home/>}/> 
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/residents' element={<Residents/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
    </Routes>
    </>
  )
}

export default App
