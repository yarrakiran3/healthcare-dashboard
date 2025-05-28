import { detailed_appointments } from "../../data/appointments"
import DetailedAppointmentCard from "./detailedappointment"

function Appointments() {
  return (
    <div className="appointments">
        {detailed_appointments.map((element)=>{
            return (
                
                <DetailedAppointmentCard 
                from_time={element.from_time} to_time={element.to_time}
                doctor_name={element.doctor}
                imageUrl={element.imageUrl} title={element.title}
                selected={element.selected}
                />
               
            )
        })}
    </div>
  )
}

export default Appointments