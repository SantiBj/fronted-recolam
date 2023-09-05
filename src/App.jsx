import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import { ScheduleDay } from './pages/createTrip/ScheduleDay'
import { CreateTrip } from './context/CreateTrip'
import { Home } from './pages/Home'
import './tailwind.css'
import { Customer } from './pages/createTrip/Customer'
import { Truck } from './pages/createTrip/Truck'
import { Confirmation } from './pages/createTrip/Confirmation'

function App() {
  return (
    <>
      <HashRouter>
        <CreateTrip>
          <nav style={{ "display": 'flex', "flexDirection": "row", "justifyContent": "space-between" }}>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/create-trip/scheduleDay"}>Crear Viaje</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-trip/scheduleDay' element={<ScheduleDay />} />
            <Route path='/create-trip/customer' element={<Customer />} />
            <Route path='/create-trip/truck' element={<Truck/>}/>
            <Route path='/create-trip/confirmation' element={<Confirmation/>}/>
          </Routes>
        </CreateTrip>
      </HashRouter>
    </>
  )
}

export default App
