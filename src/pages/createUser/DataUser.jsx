import { useParams } from "react-router-dom";
import { ContentInputsData } from "../../components/createUser/ContentInputsData";
import { Title } from "../../components/share/Title"
import { TitleMajor } from "../../components/share/TitleMajor";


const rolesSpanish = {
  customer: "Cliente",
  admin: "Administrador",
  truck: "Camion",
};

export function DataUser() {
  const { role } = useParams();
  const roleSpanish = rolesSpanish[role];

  return (
    <div className="space-y-[120px]">
      <TitleMajor  text={"Crear Usuario"} />
      <Title to={"/create/user"} text={`Datos requeridos para crear un ${roleSpanish}`}/>
      <ContentInputsData roleSpanish={roleSpanish} role={role} />
    </div>
  );
}
