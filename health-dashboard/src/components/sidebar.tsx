import { faGear } from "@fortawesome/free-solid-svg-icons"
import HealthCareLogo from "../assets/logo"
import SideElement from "./sidebar/sideelement"
import SideList from "./sidebar/sidelist"
import { navdata } from "../data/sidebardata"
import '../styles/sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar">
       
      <div >
          <HealthCareLogo/>
          <div className="side-main-options">
            {navdata.map((nav)=>{
              return(
                <SideList title={nav.title} items={nav.items}/>
              )
            })}
          </div>
          
      </div>
      
      <div className="side-last-options">
        <SideElement icon={faGear} text="Settings" selected={false}/>
      </div>
    </div>
  )
}

export default Sidebar