import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Signup } from '../page/Signup'
import { Signin } from '../page/Signin'
import { Dashboard } from '../page/Dashboard'
export const Routing = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element ={<Signup/>}></Route>
        <Route path='/Signin' element ={<Signin/>}></Route>
        <Route path='/Dashboard' element ={<Dashboard></Dashboard>}></Route>
    </Routes>
   
   </BrowserRouter>
  )
}
