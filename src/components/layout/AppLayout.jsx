import React from 'react'

import Topnav from '../topnav/Topnav'
import Sidebar from '../sidebar/Sidebar'
import AppRoutes from '../AppRoutes'

import { BrowserRouter, Route} from 'react-router-dom'

import './AppLayout.css'
const AppLayout = () => {
  return (
    <BrowserRouter>
        <Route render={(props)=>(
          <div className='layout'>
              <Sidebar {...props}/>
              <div className="layout__content">
                  <Topnav/>
                  <div className="layout__content-main">
                      <AppRoutes/>
                  </div>
              </div>
          </div>
        )}/>
    </BrowserRouter>
  )
}

export default AppLayout
