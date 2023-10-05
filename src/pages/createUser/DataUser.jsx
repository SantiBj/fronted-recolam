import { useParams } from "react-router-dom";
import { ContentInputsData } from "../../components/createUser/ContentInputsData";

const rolesSpanish = {
  customer: "Cliente",
  admin: "Administrador",
  truck: "Camion",
};

export function DataUser() {
  const { role } = useParams();
  const roleSpanish = rolesSpanish[role];

  return (
    <div className="">
      <h1 className="my-[20px]">
        Datos requeridos para crear un {roleSpanish}
      </h1>
      <ContentInputsData roleSpanish={roleSpanish} role={role} />
    </div>
  );
}
