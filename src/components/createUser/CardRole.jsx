import { TbTruck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { LiaUserSecretSolid, LiaUserAltSolid } from "react-icons/lia";

export function CardRole({ role, to }) {
  return (
    <Link to={to}>
      <section className="bg-gray-200 w-fit shadow-lg p-[30px] rounded-lg">
        <div className="flex flex-col justify-center items-center">
          {role == "truck" && (
            <>
              <div>
                <TbTruck size={40} />
              </div>
              <div>Camión</div>
            </>
          )}
          {role == "customer" && (
            <>
              <div>
                <LiaUserAltSolid size={40} />
              </div>
              <div>Cliente</div>
            </>
          )}
          {role == "admin" && (
            <>
              <div>
                <LiaUserSecretSolid size={40} />
              </div>
              <div>Admin</div>
            </>
          )}
        </div>
      </section>
    </Link>
  );
}
