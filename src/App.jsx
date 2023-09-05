import { HashRouter, Route, Routes,Link } from 'react-router-dom'
import { ScheduleDay } from './pages/ScheduleDay'
import { CreateTrip } from './context/CreateTrip'
import { Home } from './pages/Home'
import './tailwind.css'

function App() {
  return (
    <>
      <HashRouter>
        <CreateTrip>
        <nav style={{"display":'flex',"flexDirection":"row","justifyContent":"space-between"}}>
          <Link to={"/"}>Inicio</Link>
          <Link to={"/create-trip/scheduleDay"}>Crear Viaje</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create-trip/scheduleDay' element={<ScheduleDay/>}/>
        </Routes>
        </CreateTrip>
      </HashRouter>
    </>
  )
}

export default App
