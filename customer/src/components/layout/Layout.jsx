import React from 'react'
import Appbar from '../header/Appbar'
import Footer from '../footer/Footer'

import CustomerRouter from '../router/CustomerRouter'

import { BrowserRouter, Route} from 'react-router-dom'

import './layout.css'



const Layout = () => {
  
  return (
    <BrowserRouter>
        <Route render={(props)=>(
          <div className='layout'>
              <Appbar {...props}/>
              <div className="layout__content-main">
                  <CustomerRouter/>
              </div>
              <Footer/>
          </div>
        )}/>
    </BrowserRouter>
  )
}

export default Layout
