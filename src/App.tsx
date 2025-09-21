

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import LogIn from './Pages/LogIn'
import Contact from './Pages/Contact'
import News from './Pages/News'
import Residents from './Pages/Residents'
import AdminDashboard from './Pages/AdminDashboard'
import Code from './Pages/Code'
import Number from './Pages/Number'



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
      <Route path='/code' element={<Code/>}></Route>
      <Route path='/number' element={<Number/>}></Route>
    </Routes>
    </>
  )
}

export default App
