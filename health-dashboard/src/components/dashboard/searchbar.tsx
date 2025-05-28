import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder="Search" 
        className='search-input'
        
      />
      <FontAwesomeIcon icon={faBell} className="search-icon"  />
    </div>
  )
}
