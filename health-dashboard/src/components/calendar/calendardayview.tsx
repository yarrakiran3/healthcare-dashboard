function TimeComponent({time,selected,marked,dayselected}:{time:string,selected:boolean,marked:boolean,dayselected:boolean}){
    
    let bgColor="";
    let color="rgba(0,48,135,1)";

    if(selected&&dayselected){
        bgColor="rgba(0,48,135,1)";
        color="rgba(255,255,255,1)"
    }else if(selected&&!dayselected){
        bgColor="rgba(0,48,135,0.5)";
        color="rgba(255,255,255,1)";
    }

    return(
        <div style={{ backgroundColor:bgColor,color:color,padding:"2px",borderRadius:'6px'}}>
            {!marked&&<div >{time===""?"_":time}</div>  }
            {marked&&<div ><u>{time===""?"_":time}</u></div>  }
        </div>
    )

}

export default function CalendarDay({dayofweek,dayofmonth,selected,marked,times}:{dayofweek:string,dayofmonth:number,selected:boolean,marked:boolean,times:any[]}) {
    
    let bgColor="";
    let color="rgba(0,48,135,1)";

    if(selected){
        bgColor="rgba(0,48,135,0.1)"
    }
    if(marked){
        color="rgba(188,188,188,1)"
    }
    
    return (
    <div className="calendar-day" style={{backgroundColor:bgColor,color:color}}>
        <div>{dayofweek}</div>
        <div style={{fontSize:'large',fontWeight:'bold'}}>{dayofmonth}</div>
        <div>
            {times.map((time)=>{
                return (
                <TimeComponent time={time.time} marked={time.marked}
                            selected={time.selected} dayselected={selected}/>
            )
            })}
        </div>
    </div>
  )
}
