import { Link } from "react-router-dom";

export function CardConfirmation({ content, to }) {
  return (
    <Link className="border-2 border-black" to={to}>
      {content}
    </Link>
  );
}
