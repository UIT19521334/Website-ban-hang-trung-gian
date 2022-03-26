import React from 'react'

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
