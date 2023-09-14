import { useState } from "react";
import { URL_API } from "../config";
import { translateM } from "../services/createTrip/translate";

export function useConsult(url, method = "GET", body = null) {
  const [dataConsult, setDataConsult] = useState(null);
  const [errorsConsult, setErrorsConsult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
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
        const message = await response.json();
        throw { status: response.status, message: message.message };
      }
      const data = await response.json();
      setDataConsult(data);
      setErrorsConsult(200);
    } catch (error) {
      const message = await translateM(error.message)
      setErrorMessage(message);
      setErrorsConsult(error.status);
    } finally {
      setLoading(false);
    }
  }

  return {
    dataConsult,
    errorsConsult,
    setErrorsConsult,
    errorMessage,
    setErrorMessage,
    loading,
    fecthingData,
  };
}
