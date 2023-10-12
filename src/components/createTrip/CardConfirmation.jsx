import { Link } from "react-router-dom";

export function CardConfirmation({ content, to }) {
  return (
    <Link className="bg-white transition-all hover:scale-105 p-[10px] rounded-md" to={to}>
      {content}
    </Link>
  );
}
