import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
function AppLayout() {
    return (
      <div >
        <Sidebar/>
        <div style={{padding:'0px 0px 0px 280px'}}>
            <Outlet/>
        </div>
      </div>
    );
  }
  
  export default AppLayout;