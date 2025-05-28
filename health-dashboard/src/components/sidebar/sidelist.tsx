import SideElement from "./sideelement"

export default  function SideList({title,items}:{title:string,items:any[]}) {
  return (
    <div>
      <div>{title}</div>
      <div className="side-list">
        {items.map((item)=>{
          return(
            <div className="side-list-item">
                <SideElement icon={item.icon} text={item.title} selected={item.selected}/>
            </div>
        )
        })}
      </div>
    </div>
  )
}

