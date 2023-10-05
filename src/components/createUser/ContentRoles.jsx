import { useRef } from "react";
import { CardRole } from "./CardRole";

export function ContentRoles() {
  const url = useRef("/create/user/");

  return (
    <div className="w-fit bg-blue-200 flex gap-[50px]">
      <CardRole role={"customer"} to={url.current + "customer"} />
      <CardRole role={"admin"} to={url.current + "admin"} />
      <CardRole role={"truck"} to={url.current + "truck"} />
    </div>
  );
}
