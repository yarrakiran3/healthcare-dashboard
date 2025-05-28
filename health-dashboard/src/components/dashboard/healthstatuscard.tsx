
function HealthStatusCardComponent({imageUrl, title, date, percentage,color}: {imageUrl: string,title:string, date: string, percentage: number,color:string}) {
  return (
    <div className="health-status-card">
        <div style={{display:"flex",flexDirection:"row",gap:"8px"}}>
            <div >
                <img src={imageUrl} className="health-status-card-image"></img>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',fontWeight:'bold',color:'#003087'}}>{title}</div>
        </div>
        <div style={{fontSize:'x-small',color:'rgba(0,0,0,0.4)'}}>Date: {date}</div>
        <div className="progress-container">
        <div className="progress-bar" style={{ width: `${percentage}%` ,backgroundColor:`${color}`}}></div>
        </div>
    </div>
  )
}

export default HealthStatusCardComponent;