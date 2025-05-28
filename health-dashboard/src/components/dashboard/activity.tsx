import EachDayActivity from "./eachdayactivity";
import '../../styles/activity.css'
export default function ActivityComponent({numberofappointments}:{numberofappointments:number}) {
  return (
    <div className="activity">
        <div className="activity-header">
            <div style={{fontWeight:'bold'}}>Activity</div>
            <div style={{color:'rgba(0,0,0,0.4)'}}>{numberofappointments} appointment on this week</div>
        </div>
       
        <div className="activity-body">
           
                <div className="day-activity">
                    <EachDayActivity day="Mon"/>
                </div>
                <div className="day-activity">
                    <EachDayActivity day="Tue"/>
                </div>
                <div className="day-activity">
                    <EachDayActivity day="Wed"/>
                </div>
                <div className="day-activity">
                    <EachDayActivity day="Thu"/>
                </div>
                <div className="day-activity">
                    <EachDayActivity day="Fri"/>
                </div>
                <div className="day-activity">
                    <EachDayActivity day="Sat"/>
                </div>
                <div className="day-activity">
                    <EachDayActivity day="Sun"/>
                </div>
        </div>
    
    </div>
  )
}
