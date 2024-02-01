import React from 'react'
import SignUp from './Components/SignUp'
import {Routes, Route} from "react-router-dom"
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'
import TopNavbar from './Components/TopNavbar'
import ProductView from './Components/ProductView'
import Cart from './Components/Cart'
const App = () => {
  return (
    <>
    <TopNavbar />
    <Routes>
      <Route exact path='/' element={<SignUp />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/forgotpass' element={<ResetPassword />} />
      <Route exact path='/viewProduct' element={<ProductView />} />
      <Route exact path='/viewCart' element={<Cart />} />
    </Routes>
    </>
  )
}

export default App