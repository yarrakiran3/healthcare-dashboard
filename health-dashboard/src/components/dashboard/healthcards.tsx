import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { health_status_card_data } from "../../data/healthdata"
import HealthStatusCardComponent from "./healthstatuscard"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import '../../styles/healthcards.css'

function HealthCards() {
  return (
    
    <div className="health-cards-container">
    <div className="health-cards">
    {
            health_status_card_data.map(element => {
                return (
                    <HealthStatusCardComponent 
                        imageUrl={element.imageUrl} 
                        title={element.title} 
                        date={element.date} 
                        percentage={element.percentage} 
                        color={element.color} 
                    />
                )
                
            })
        
    }
    </div>
    <div className="health-card-details">
        <div >Details</div>
        <FontAwesomeIcon icon={faArrowRight} style={{padding:'4px'}}/>
    </div>
    </div>


  )
}

export default HealthCards