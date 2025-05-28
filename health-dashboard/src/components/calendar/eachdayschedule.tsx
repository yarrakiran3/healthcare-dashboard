import SimpleAppointmentCard from "./simpleappointment"

export default function EachDaySchedule({day,appointmentdetails}:{day:string,appointmentdetails:any[]}) {
  return (
    <div className="each-day-schedule">
        <div style={{color:'rgba(0,0,0,0.7)'}}>
            On {day}
        </div>
        <div className="simple-appoitment-cards">
            {
                appointmentdetails.map((appointment)=>{
                    return(
                        <SimpleAppointmentCard 
                        title={appointment.title} time={appointment.time} imageUrl={appointment.imageUrl}/>
                    )
                })
            }
        </div>
    </div>
  )
}
