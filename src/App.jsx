import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Menu from './components/menu/Menu'
import Keunggulan from './components/keunggulan/Keunggulan'
import Order from './components/order/Order'
import Review from './components/review/Review'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Menu />
      <Keunggulan />
      <Order />
      <Review />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App

