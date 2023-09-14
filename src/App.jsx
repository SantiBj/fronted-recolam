import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import { ScheduleDay } from './pages/createTrip/ScheduleDay'
import { CreateTrip } from './context/CreateTrip'
import { Home } from './pages/Home'
import './tailwind.css'
import { Customer } from './pages/createTrip/Customer'
import { Truck } from './pages/createTrip/Truck'
import { Confirmation } from './pages/createTrip/Confirmation'
import { ListTripsWithoutTruck } from './pages/assignTruck/ListTripsWithoutTruck'
import { TruckAvailable } from './pages/assignTruck/TruckAvailable'
import { TripsWithoutInit } from './pages/TripsWithoutInit'

function App() {
  return (
    <>
      <HashRouter>
        <CreateTrip>
          <nav style={{ "display": 'flex', "flexDirection": "row", "justifyContent": "space-between" }}>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/create-trip/scheduleDay"}>Crear Viaje</Link>
            <Link to={"/assign-truck/list"}>Asignar Camion</Link>
            <Link to={'/trips-without-init/'}>Iniciar viaje</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-trip/scheduleDay' element={<ScheduleDay />} />
            <Route path='/create-trip/customer' element={<Customer />} />
            <Route path='/create-trip/truck' element={<Truck/>}/>
            <Route path='/create-trip/confirmation' element={<Confirmation/>}/>
            <Route path='/assign-truck/list' element={<ListTripsWithoutTruck/>}/>
            <Route path='/trip/assign-truck/:trip/:date' element={<TruckAvailable/>} />
            <Route path='/trips-without-init/' element={<TripsWithoutInit/>} />
          </Routes>
        </CreateTrip>
      </HashRouter>
    </>
  )
}

export default App
