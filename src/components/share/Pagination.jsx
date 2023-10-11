import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export function Pagination({ dataConsult, page, nextPage, prevPage }) {
  return (
    <div className="w-full flex justify-between items-center">
      <button
        onClick={prevPage}
        className={`bg-[#2c8d42] p-[5px] text-white aspect-square rounded-full ${
          dataConsult.previous == null && "pointer-events-none opacity-60"
        }`}
      >
        <GoChevronLeft size={35} />
      </button>
      <p className="text-white font-bold">{page}</p>
      <button
        onClick={nextPage}
        className={`bg-[#2c8d42] p-[5px] text-white aspect-square rounded-full ${
          dataConsult.next == null && "pointer-events-none opacity-60"
        }`}
      >
        <GoChevronRight size={35} />
      </button>
    </div>
  );
}
