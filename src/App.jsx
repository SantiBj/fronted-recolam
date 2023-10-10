import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { ScheduleDay } from "./pages/createTrip/ScheduleDay";
import { CreateTrip } from "./context/CreateTrip";
import { Home } from "./pages/Home";
import "./tailwind.css";
import { Customer } from "./pages/createTrip/Customer";
import { Truck } from "./pages/createTrip/Truck";
import { Confirmation } from "./pages/createTrip/Confirmation";
import { ListTripsWithoutTruck } from "./pages/assignTruck/ListTripsWithoutTruck";
import { TruckAvailable } from "./pages/assignTruck/TruckAvailable";
import { TripsWithoutInit } from "./pages/initTripCompany/TripsWithoutInit";
import { DetailsTrip } from "./pages/initTripCompany/DetailsTrip";
import { TripsActives } from "./pages/tripsActives/TripsActives";
import { DetailsTripActive } from "./pages/tripsActives/DetailsTripActive";
import { Trucks } from "./pages/Trucks";
import { Trips } from "./pages/editTrip/Trips";
import { EditTrip } from "./pages/editTrip/EditTrip";
import { TripEditTruck } from "./pages/editTrip/TripEditTruck";
import { CreateUser } from "./pages/createUser/CreateUser";
import { DataUser } from "./pages/createUser/DataUser";
import { NavBar } from "./components/share/NavBar";

function App() {
  return (
    <>
      <HashRouter>
        <CreateTrip>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create/user" element={<CreateUser />} />
            <Route path="/create/user/:role" element={<DataUser />} />
            <Route path="/create-trip/scheduleDay" element={<ScheduleDay />} />
            <Route path="/create-trip/customer" element={<Customer />} />
            <Route path="/create-trip/truck" element={<Truck />} />
            <Route
              path="/create-trip/confirmation"
              element={<Confirmation />}
            />
            <Route
              path="/assign-truck/list"
              element={<ListTripsWithoutTruck />}
            />
            <Route
              path="/trip/assign-truck/:trip/:date"
              element={<TruckAvailable />}
            />
            <Route path="/trips-without-init/" element={<TripsWithoutInit />} />
            <Route
              path="/trip-without-details/:trip/"
              element={<DetailsTrip />}
            />
            <Route path="/trip-actives" element={<TripsActives />} />
            <Route
              path="/trip-active-details/:trip"
              element={<DetailsTripActive />}
            />
            <Route path="/trucks" element={<Trucks />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trip-edit/:idTripEncript" element={<EditTrip />} />
            <Route
              path="/trip-edit-truck/:idTripEncrypt/:newDateTrip"
              element={<TripEditTruck />}
            />
          </Routes>
        </CreateTrip>
      </HashRouter>
    </>
  );
}

export default App;
