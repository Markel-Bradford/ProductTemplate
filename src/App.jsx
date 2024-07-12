import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import './App.css'
import Navbar from './Components/Navbar'
import ProductInfo from './Components/ProductInfo'
import Footer from './Components/Footer'
import Main from './Layouts/Main'

function App() {


  return (
    <div className='app'>
      <Router>
      <ScrollToTop />
      <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/platinumthreads" element={<Main />}></Route>
        </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App
