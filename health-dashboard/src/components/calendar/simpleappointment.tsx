
function SimpleAppointmentCard({imageUrl, title, time}:{imageUrl: string, title: string, time:string}) {
  return (
    <div className="simple-appointment-card">
            <div style={{display:"flex",flexDirection:"row",gap:"8px"}}>
                
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',fontWeight:'bold',fontSize:'12px'}}>{title}</div>
                <div >
                    <img src={imageUrl} className="appointment-card-image"></img>
                </div>
            </div>
            <div> {time}</div>
            
            
        </div>
  )
}

export default SimpleAppointmentCard