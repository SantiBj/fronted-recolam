import { useState } from "react";
import { URL_API } from "../config";

export function useConsult(url, method = "GET", body = null) {
  const [dataConsult, setDataConsult] = useState(null);
  const [errorsConsult, setErrorsConsult] = useState(null);
  const [loading, setLoading] = useState(null);

  const headersConsult = {
    method: method,
    body: body !== null ? JSON.stringify(body) : null,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Token 50687ac9c8c5edcd86131b8454a531fcfef8e465",
    },
  };


  async function fecthingData() {
    try {
      setLoading(true);
      const response = await fetch(URL_API + url, headersConsult);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      setDataConsult(data);
      setErrorsConsult(200);
    } catch (error) {
      setErrorsConsult(error.message);
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  return {
    dataConsult,
    errorsConsult,
    setErrorsConsult,
    loading,
    fecthingData,
  };
}
