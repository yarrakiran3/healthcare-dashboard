
import './App.css'
import CalendarMainComponent from './components/calendar'
import DashboardMainComponent from './components/dashboard'
import HeaderForMobile from './components/header'
import Sidebar from './components/sidebar'

function App() {
  
  return (
    <>
    <div >
        <HeaderForMobile/>
    </div>
    <div className='app'>
      <Sidebar/>
      
      <div className='app-main'>
        <DashboardMainComponent/>
        <CalendarMainComponent/>
      </div>
    </div>
    </>
  )
}

export default App
