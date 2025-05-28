
export function LeftHealthIndicatorOverlay({title,imageUrl}:{title:string,imageUrl:string}) {
  return (
    <div className="health-indicator-overlay-right" 
        >
            
            <div style={{backgroundColor:'#33efe5',color:'rgba(0,48,135,1)',display:'flex',flexDirection:'row',padding:'5px',borderRadius:'10px'}}>
                <img src={imageUrl} className="overlay-image"/>
                <div>{title}</div>
            </div>
            
            <img src="/scanner.png" alt="scanner" className="overlay-scanner"/>
            
    </div>
  )
}
export function RightHealthIndicatorOverlay({title,imageUrl}:{title:string,imageUrl:string}) {
  return (
    <div className="health-indicator-overlay-left" >
            
            <img src="/scanner.png" alt="scanner" className="overlay-scanner"/>
            
            <div style={{backgroundColor:'rgba(0,48,135,1)',color:'rgba(255,255,255,1)',display:'flex',flexDirection:'row',padding:'5px',borderRadius:'10px'}}>
                <img src={imageUrl} className="overlay-image"/>
                <div>{title}</div>
            </div>
    </div>
  )
}
  