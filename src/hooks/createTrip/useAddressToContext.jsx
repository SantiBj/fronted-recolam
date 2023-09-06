import { useEffect } from "react";

export function useAddressToContext(
  dataConsult,
  addValueToKey,
  addValueInputs
) {
  useEffect(() => {
    if (dataConsult !== null) {
      addValueToKey("address", dataConsult.address);
      addValueInputs(null, dataConsult.address);
    }
  }, [dataConsult]);
}
