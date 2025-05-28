import Profile from "./calendar/profile";
import Appointments from "./calendar/appointments";
import UpcomingSchedule from "./calendar/upcomingschedule";
import CalendarView from "./calendar/calendarview";
import '../styles/calendar.css'

export default function CalendarMainComponent() {
  return (
    <div className="calendar">
        <div className="calendar-profile">
        <Profile/>
        </div>
        <CalendarView/>
        <Appointments/>
        <UpcomingSchedule/>
    </div>
  )
}
