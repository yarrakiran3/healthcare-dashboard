
export function LeftHealthIndicatorOverlay({title,imageUrl,x,y}:{title:string,imageUrl:string,x:number,y:number}) {
  return (
    <div className="health-indicator-overlay-right" 
        style={{position:"absolute",top:`${x}%`,left:`${y}%`}}>
            
            <div style={{backgroundColor:'#33efe5',color:'rgba(0,48,135,1)',display:'flex',flexDirection:'row',padding:'5px',borderRadius:'10px'}}>
                <img src={imageUrl} className="overlay-image"/>
                <div>{title}</div>
            </div>
            
            <img src="/src/assets/scanner.png" alt="scanner" className="overlay-scanner"/>
            
    </div>
  )
}
export function RightHealthIndicatorOverlay({title,imageUrl,x,y}:{title:string,imageUrl:string,x:number,y:number}) {
  return (
    <div className="health-indicator-overlay-left" style={{position:"absolute",top:`${x}%`,left:`${y}%`}}>
            
            <img src="/src/assets/scanner.png" alt="scanner" className="overlay-scanner"/>
            
            <div style={{backgroundColor:'rgba(0,48,135,1)',color:'rgba(255,255,255,1)',display:'flex',flexDirection:'row',padding:'5px',borderRadius:'10px'}}>
                <img src={imageUrl} className="overlay-image"/>
                <div>{title}</div>
            </div>
    </div>
  )
}
  