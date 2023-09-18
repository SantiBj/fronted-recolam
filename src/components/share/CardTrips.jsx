import { Link } from "react-router-dom";
import { encrypt } from "../../services/encryptData";


export function CardTrips({ trip, to }) {
  const url = to + encrypt(trip.id)

  return (
    <div className="border-[1px] border-gray-400">
    <Link to={url}>
      <h1 key={trip.id}>
        {trip.id}-{trip.user.id}-{trip.user.name}-{trip.address}{" "}
      </h1>
    </Link>
    </div>
  );
}
