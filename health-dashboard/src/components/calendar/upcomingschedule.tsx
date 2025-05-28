import { upcoming_schedue } from "../../data/appointments"
import EachDaySchedule from "./eachdayschedule"

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
        <div style={{fontWeight:'bold',color:"rgba(0,48,135,1)"}}>
            The Upcoming Schedule
        </div>
        <div className="eachday-listing">
            {upcoming_schedue.map((day)=>{
                return(
                    
                    <EachDaySchedule day={day.day} appointmentdetails={day.appointments}/>
                    
                )
            })}
        </div>
    </div>
  )
}

export default UpcomingSchedule