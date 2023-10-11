import { ContentRoles } from "../../components/createUser/ContentRoles";
import { Title } from "../../components/share/Title";
import { TitleMajor } from "../../components/share/TitleMajor";

export function CreateUser() {
  return (
    <div className="space-y-[100px]">
      <TitleMajor text={"Crear Usuario"} />
      <Title text={"Selecione un rol : "} />
      <div className="flex justify-center">
        <ContentRoles />
      </div>
    </div>
  );
}
