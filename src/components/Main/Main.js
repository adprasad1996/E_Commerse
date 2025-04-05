import React from 'react'
import Navbar from '../Navbar/Navbar'
import RestrentCard from '../RestrentCard/RestrentCard'
import {createBrowserRouter, Outlet} from 'react-router-dom'
import About from '../About/About'
import Cart from '../cart/Cart'
import Contact from '../contact/Contact'
import {Provider} from 'react-redux'
import appStore from '../store/appStore'
import SideNavBar from '../Navbar/Sidenavbar'

function AppLayOut() {
  return (
    <Provider store={appStore}>
    <div>
        <Navbar/>
        <div className='d-flex'>
        <SideNavBar/>
        <Outlet/>

        </div>
        
    </div>
    </Provider>
  )
}

export default AppLayOut


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayOut />,
    children: [
      { path: '/', element: <RestrentCard /> },
      { path: '/category/:categoryName', element: <RestrentCard /> }, // 👈 add this
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
    ]
  }
  ,
  
])