import { Link } from "react-router-dom";

export function CardTrips({trip,to}) {
  return (
    <Link to={to}>
      <h1 key={trip.id}>
        {trip.id}-{trip.user.id}-{trip.user.name}-{trip.address}{" "}
      </h1>
    </Link>
  );
}
