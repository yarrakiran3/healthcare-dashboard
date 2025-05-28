
export default function DetailedAppointmentCard({imageUrl, title, from_time, to_time, doctor_name,selected}:{imageUrl: string, title: string, from_time: string, to_time: string, doctor_name: string,selected:boolean}) {
  const background_color=selected?"rgba(0,48,135,1)":"rgba(0,48,135,0.2)";
  
  const text_color=selected?"rgba(255, 255, 255, 1)":"rgba(0,48,135,1)";


  return (
    <div className="detailed-appointment-card" style={{color:text_color,backgroundColor:background_color}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"8px"}}>
            
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',fontWeight:'bold',fontSize:'12px'}}>
              {title}
            </div>
            <div >
                <img src={imageUrl} className="appointment-card-image"></img>
            </div>
        </div>
        <div style={{marginTop:'5px'}}> {from_time}{'-'}{to_time}</div>
        
        <div >Dr. {doctor_name}</div>
        
    </div>
  )
}
