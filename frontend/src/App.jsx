import React, { useState } from 'react'
import Nav_bar from './components/nav bar/Nav_bar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify  from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'


const App = () => {


   const [showLogin,setShowLogin] = useState(false)

  return (

    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Nav_bar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
    
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App