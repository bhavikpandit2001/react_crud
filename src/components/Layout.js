import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import Header from './Header'
import Home from './Home'
import Navbar from './Navbar'
import Posts from './posts/Posts'
import Products from './products/Products'
import Quotes from './quotes/Quotes'
import Todos from './todos/Todos'
import Users from './users/Users'

const Layout = () => {
  return (
    <div className='layout'>
          <Navbar />
          <div className='main-section'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Auth />} />
              <Route path='/products' element={<Products />} />
              <Route path='/:categoryId' element={<Products />} />
              <Route path='/users' element={<Users />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/todos' element={<Todos />} />
              <Route path='/quotes' element={<Quotes />} />
            </Routes>
          </div>
        </div>
  )
}

export default Layout