import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ProductInfo from './Components/ProductInfo'

function App() {


  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <ProductInfo />
    </div>
  )
}

export default App
