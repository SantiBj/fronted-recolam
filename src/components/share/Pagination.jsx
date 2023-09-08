export function Pagination({ dataConsult, page, nextPage, prevPage }) {
  return (
    <div>
      <button
        onClick={prevPage}
        className={`bg-blue-500 p-[3px] ${
          dataConsult.previous == null && "pointer-events-none opacity-60"
        }`}
      >
        anterior
      </button>
      {page}
      <button
        onClick={nextPage}
        className={`bg-blue-500 p-[3px] ${
          dataConsult.next == null && "pointer-events-none opacity-60"
        }`}
      >
        siguiente
      </button>
    </div>
  );
}
