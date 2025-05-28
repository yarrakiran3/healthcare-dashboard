
export default function EachDayActivity({ day }: { day: string }) {
  return (
    <div className="day-activity">
        <div className="day-activity-bars">
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div className="day-activity-bar1"></div> 
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div className="day-activity-bar2"></div> 
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
            <div className="day-activity-bar3"></div> 
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <div className="day-activity-bar4"></div> 
          </div>
        </div>
        
        <div >
            {day}
        </div>
    </div>
  )
}
