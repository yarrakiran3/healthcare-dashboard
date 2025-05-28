import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideElement({icon,text,selected}:{icon:IconDefinition,text:string,selected:boolean}) {
  let color="";
  let wt="normal";
  if(selected){
      color="rgba(0,48,135,1)";
      wt="bold";
  }
  return (
    <div className="side-element" style={{color:color,fontWeight:wt}}>
        <div>
            <FontAwesomeIcon icon={icon}/>
        </div>
        <div style={{marginLeft:"8px"}}>{text}</div>
        
    </div>
  )
}
