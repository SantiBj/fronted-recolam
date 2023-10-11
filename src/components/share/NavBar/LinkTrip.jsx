import { Link } from "react-router-dom";

export function LinkTrip({ text, to }) {
  return (
    <Link
      className="hover:bg-[#D9D9D9] hover:opacity-[50%] w-full text-center"
      to={to}
    >
      {text}
    </Link>
  );
}
