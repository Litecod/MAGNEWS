import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer/Footer'
import Bussiness from './Pages/Bussiness'
import Entertainment from './Pages/Entertainment'
import Science from './Pages/Science'
import Sport from './Pages/Sport'
import Technology from './Pages/Technology'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/business' element={<Bussiness />}/>
        <Route path='/entertainment' element={<Entertainment />}/>
        <Route path='/science' element={<Science />}/>
        <Route path='/sport' element={<Sport />}/>
        <Route path='/technology' element={<Technology />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
