import { HiOutlineArrowSmLeft,HiOutlineArrowSmRight } from "react-icons/hi"
import { Link } from "react-router-dom";

export function NavigateBetweenPages({prev,next}){
    return(
        <section className="flex justify-between w-full">
        <Link to={prev}>
          <div className={`bg-blue-200 rounded-full w-fit p-[5px] ${!prev && "opacity-60 pointer-events-none"}`}>
            <HiOutlineArrowSmLeft size={30}/>
          </div>
        </Link>
        <Link to={next}>
          <div className={`bg-blue-200 rounded-full w-fit p-[5px] ${!next && "opacity-60 pointer-events-none"}`}>
            <HiOutlineArrowSmRight size={30} />
          </div>
        </Link>
      </section>
    )
}