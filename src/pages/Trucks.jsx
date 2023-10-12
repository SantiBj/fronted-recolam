import { useConsult } from "../hooks/useConsult";
import { Loading } from "../components/share/Loading";
import { Errors } from "../components/share/Errors";
import { useEffect } from "react";
import { CardTruck } from "../components/trucks/CardTruck";
import { usePaginate } from "../hooks/share/usePaginate";
import { Pagination } from "../components/share/Pagination";
import { Title } from "../components/share/Title";

export function Trucks() {
  const { page, nextPage, prevPage } = usePaginate();
  const { dataConsult, errorsConsult, errorMessage, loading, fecthingData } =
    useConsult(`trucks?page=${page}`);

  useEffect(() => {
    fecthingData();
  }, [page]);

  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
    <article className="space-y-[100px]">
      <Title text={"Camiones :"}/>
      <article className="w-[80%] mx-auto">
        <section className="grid justify-items-center gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-full">
          {dataConsult.results.map((truck) => (
            <CardTruck truck={truck} key={truck.placa} />
          ))}
        </section>
      </article>
      <Pagination
        dataConsult={dataConsult}
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </article>
  );
}
