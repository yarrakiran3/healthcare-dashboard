import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ActivityComponent from "./dashboard/activity";
import AnatomySection from "./dashboard/anatomy";
import HealthCards from "./dashboard/healthcards";
import SearchBar from "./dashboard/searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/dashboard.css';

export default function DashboardMainComponent() {
  return (
    <div className="dashboard">
      <SearchBar/>
      <div className="dashboard-header">
        <div style={{fontWeight:'bold',fontSize:'large'}}>
          Dashboard
        </div>
        <div style={{fontSize:'x-small',padding:"8px 20px 0 0"}}>
          This Week<FontAwesomeIcon icon={faChevronDown} />
          
        </div>
      </div>
      
      <div className="dashboard-content">
        <AnatomySection/>
        <HealthCards/>
      </div>
      
      <ActivityComponent numberofappointments={3}/>
      
    </div>
  )
}


