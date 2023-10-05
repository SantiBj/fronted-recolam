import { CardRole } from "../../components/createUser/CardRole";
import { ContentRoles } from "../../components/createUser/ContentRoles";

export function CreateUser() {
  return (
    <div>
      <h1>Crear usuario</h1>
      <div className="flex justify-center">
        <ContentRoles />
      </div>
    </div>
  );
}
