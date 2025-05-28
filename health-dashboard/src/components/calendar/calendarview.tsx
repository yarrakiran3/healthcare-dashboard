import { faArrowLeft, faArrowRight, faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { days_in_calendar } from "../../data/calendar";
import CalendarDay from "./calendardayview";

function CalendarView() {
  return (
    <div className="calendar-view">
        <div className="calender-view-header">
            <div>October 2021</div>
            <div style={{display:'flex',flexDirection:"row"}}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:'10px'}}/>
            </div>
        </div>

        <div className="calendar-week-view">
            {days_in_calendar.map((day)=>{
                return(
                    <CalendarDay dayofmonth={day.dayofmonth} dayofweek={day.dayofweek}
                    
                        marked={day.markedday} selected={day.selectedday} times={day.times}/>
                )
            })}
        </div>
    </div>
  )
}

export default CalendarView;