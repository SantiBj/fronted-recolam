import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

export function CardRole({ role, to }) {
  return (
    <Link to={to}>
      <section className="bg-gray-200 w-fit shadow-lg p-[45px] rounded-lg hover:scale-105 transition-all">
        <div className="flex flex-col justify-center items-center gap-[5px]">
          {role == "truck" && (
            <>
              <div className="text-green-600">
                <TbTruckDelivery size={40} />
              </div>
              <div>Camión</div>
            </>
          )}
          {role == "customer" && (
            <>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4814/4814852.png"
                  className="w-[40px]"
                  alt=""
                />
              </div>
              <div>Cliente</div>
            </>
          )}
          {role == "admin" && (
            <>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png"
                  className="w-[40px]"
                  alt=""
                />
              </div>
              <div>Admin</div>
            </>
          )}
        </div>
      </section>
    </Link>
  );
}
