import { LeftHealthIndicatorOverlay, RightHealthIndicatorOverlay } from "./overlayelement";
import { overlay_components_data } from "../../data/healthdata";
import '../../styles/anatomy.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
        <img src="/anatomy.png" alt="Human Anatomy" className="anatomy-image" />

        <LeftHealthIndicatorOverlay 
        title={overlay_components_data[0].title}
        imageUrl={overlay_components_data[0].imageUrl}
        
        />

        <RightHealthIndicatorOverlay 
        title={overlay_components_data[1].title}
        imageUrl={overlay_components_data[1].imageUrl}
        
        />
    </div>
  )
}

export default AnatomySection;