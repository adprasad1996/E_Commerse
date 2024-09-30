import React from 'react'
import Navbar from '../Navbar/Navbar'
import RestrentCard from '../RestrentCard/RestrentCard'
import {createBrowserRouter, Outlet} from 'react-router-dom'
import About from '../About/About'
import Cart from '../cart/Cart'
import Contact from '../contact/Contact'
import {Provider} from 'react-redux'
import appStore from '../store/appStore'

function AppLayOut() {
  return (
    <Provider store={appStore}>
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    </Provider>
  )
}

export default AppLayOut


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayOut/>,
    children: [
      {path: '/',
        element: <RestrentCard/>
      },
      {
        path: '/about',
        element: <About/>
      },
      
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  },
  
])