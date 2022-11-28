import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import Contact from './components/Contact'
import MyPortfolio from './components/MyPortfolio'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <MyPortfolio/>
         <Routes>
           <Route path='/pyfortfolio' element={<MyPortfolio/>}/>
           <Route path='/about' element={<AboutPage/>} />
           <Route path='/portfolio' element={<Portfolio/>} />
           <Route path='/testimonial' element={<Testimonial/>} />
           <Route path='/contact' element={<Contact/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
