import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

export function Title({ text, to = false, color = "white", size = "lg" }) {
  return (
    <section>
      {to && (
        <Link className={`text-${color} text-[18px]`} to={to}>
          <div className="flex gap-[10px]">
            <span>
              {" "}
              <BsArrowLeftCircle size={25} />{" "}
            </span>{" "}
            <p>Regresar</p>
          </div>
        </Link>
      )}
      <h2
        className={`${size == "lg" && "text-[20px]"} ${
          size == "md" && "text-[18px]"
        } ${size == "sm" && "text-[16px]"} font-semibold text-${color}`}
      >
        {text}
      </h2>
    </section>
  );
}
