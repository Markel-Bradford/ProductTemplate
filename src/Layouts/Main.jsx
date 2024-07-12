import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ProductInfo from '../Components/ProductInfo'


const Main = () => {
  return (
    <div>
      <main>
        <Hero />
        <ProductInfo />
      </main>
    </div>
  )
}

export default Main
