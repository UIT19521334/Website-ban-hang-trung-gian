import React from 'react'


import { BrowserRouter} from 'react-router-dom'
import SideBar from './components/sidebar/SideBar'
import AccountRouter from './components/router/AccountRouter'
import './accountlayout.css'



const AccountLayout = () => {
  
  return (
    
      <div className='layout'>
          <SideBar />
          <div className="layout__content">
              <AccountRouter/>
          </div>
      </div>
    
  )
}

export default AccountLayout
