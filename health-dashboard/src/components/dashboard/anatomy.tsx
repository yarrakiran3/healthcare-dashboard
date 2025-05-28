import { LeftHealthIndicatorOverlay, RightHealthIndicatorOverlay } from "./overlayelement";
import { overlay_components_data } from "../../data/healthdata";
import '../../styles/anatomy.css';

function AnatomySection() {
  return (
    <div className="anatomy-section">
        <img src="/anatomy.png" alt="Anatomy" className="anatomy-image" />

        <LeftHealthIndicatorOverlay 
        title={overlay_components_data[0].title}
        imageUrl={overlay_components_data[0].imageUrl}
        x={overlay_components_data[0].top}
        y={overlay_components_data[0].left}
        />

        <RightHealthIndicatorOverlay 
        title={overlay_components_data[1].title}
        imageUrl={overlay_components_data[1].imageUrl}
        x={overlay_components_data[1].top}
        y={overlay_components_data[1].left}
        />
    </div>
  )
}

export default AnatomySection;