import HealthCareLogo from "../assets/logo";
import Profile from "./calendar/profile";
export default function HeaderForMobile() {
  return (
    <div className="app-header-mobile">
        
        <HealthCareLogo/>
        <div className="profile-for-mobile">
        <Profile/>
        </div>
    </div>
  )
}
