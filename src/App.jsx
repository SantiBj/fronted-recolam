import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes,Link } from 'react-router-dom'
import { ScheduleDay } from './pages/ScheduleDay'
import { CreateTrip } from './context/CreateTrip'

function App() {
  return (
    <>
      <HashRouter>
        <CreateTrip>
        <nav>
          <Link to={"/"}>assign schedule day</Link>
        </nav>
        <Routes>
          <Route path='/' element={<ScheduleDay/>} />
        </Routes>
        </CreateTrip>
      </HashRouter>
    </>
  )
}

export default App
