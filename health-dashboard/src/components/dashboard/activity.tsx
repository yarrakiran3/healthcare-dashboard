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
           
                <div >
                    <EachDayActivity day="Mon"/>
                </div>
                <div >
                    <EachDayActivity day="Tue"/>
                </div>
                <div >
                    <EachDayActivity day="Wed"/>
                </div>
                <div >
                    <EachDayActivity day="Thu"/>
                </div>
                <div >
                    <EachDayActivity day="Fri"/>
                </div>
                <div >
                    <EachDayActivity day="Sat"/>
                </div>
                <div >
                    <EachDayActivity day="Sun"/>
                </div>
        </div>
    
    </div>
  )
}
