import HealthCareLogo from "../assets/logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faPlus, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";


function SearchBar() {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" style={{width:"5%"}}/>
      <input
        type="text"
        placeholder="Search" 
        style={{border: "none",outline:"none",padding:'0 10px 0 10px',width:"85%"}}
      />
      <FontAwesomeIcon icon={faBell} className="search-bell" style={{width:"5%"}} />
    </div>
  )
}

function Profile(){
  return (
    <div className="profile">
      
      <FontAwesomeIcon icon={faUser} style={{backgroundColor:"#33efe5",padding:"10px",color:"black",borderRadius:'8px'}}/>
      
      <FontAwesomeIcon icon={faPlus} style={{backgroundColor:"#003087", padding:"10px",color:"white",borderRadius:'8px',marginLeft:"10px"}}/>
      
    </div>
  )
}

export default function Header() {
  return (
    <div className="header">
    
      
      <HealthCareLogo/>
        
      <SearchBar/>
      
      <Profile/>
      
    </div>
  )
}
