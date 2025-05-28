import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile(){
  return (
    <div className="profile">
      
      <FontAwesomeIcon icon={faUser} style={{backgroundColor:"#33efe5",padding:"10px",color:"black",borderRadius:'8px'}}/>
      
      <FontAwesomeIcon icon={faPlus} style={{backgroundColor:"#003087", padding:"10px",color:"white",borderRadius:'8px',marginLeft:"10px"}}/>
      
    </div>
  )
}
