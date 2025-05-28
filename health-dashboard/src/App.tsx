
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
      <DashboardMainComponent/>
      <CalendarMainComponent/>
    </div>
    </>
  )
}

export default App
