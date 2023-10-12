import { Link } from "react-router-dom";

export function BtnContinue({ to }) {
  return (
    <Link
      to={to}
      className={`bg-[#2c8d42] py-[5px] px-[8px] rounded-md text-white`}
    >
      continuar
    </Link>
  );
}
