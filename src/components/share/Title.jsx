import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

export function Title({ text, to = false }) {
  return (
    <section>
      {to && (
        <Link className="text-white text-[20]" to={to}>
          <div className="flex gap-[10px]">
            <span>
              {" "}
              <BsArrowLeftCircle size={25} />{" "}
            </span>{" "}
            <p>Regresar</p>
          </div>
        </Link>
      )}
      <h2 className="text-[25px] md:text-[28px] font-semibold text-white">
        {text}
      </h2>
    </section>
  );
}
