import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
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
