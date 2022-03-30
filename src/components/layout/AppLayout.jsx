import React, {useState} from 'react'
import Topnav from '../topnav/Topnav'
import Sidebar from '../sidebar/Sidebar'
import AppRoutes from '../AppRoutes'

import { BrowserRouter, Route} from 'react-router-dom'

import './AppLayout.css'


const AppLayout = () => {
  
  const[showSideBar,setShowSideBar] = useState(true);

  const hideSideBar = () => {
    console.log('click')
    setShowSideBar(!showSideBar)
  }
  return (
    <BrowserRouter>
        <Route render={(props)=>(
          <div className='layout'>
              <div className={showSideBar ? 'layout__sideBar' : 'layout__sideBar noSideBar'}>
                <Sidebar {...props}/>
              </div>
              
              <div className={showSideBar ? 'layout__content' : 'layout__content noSideBar'}>
                  <Topnav className='layout__content-navbar'  hideSideBar={hideSideBar}/>
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
