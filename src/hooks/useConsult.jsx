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
      Authorization: "Token 83238f10e87d3f77c37ff579e9d973148e5f6570",
    },
  };

  async function fecthingData(bodyConsult = null) {
    let headers = null;

    if (bodyConsult !== null && !("target" in bodyConsult)) {
      headers = {
        method: method,
        body: JSON.stringify(bodyConsult),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Token 83238f10e87d3f77c37ff579e9d973148e5f6570",
        },
      };
    } else {
      headers = headersConsult;
    }

    try {
      setLoading(true);
      const response = await fetch(URL_API + url, headers);
      if (!response.ok) {
        const message = await response.json();
        throw { status: response.status, message: message.message };
      }
      const data = await response.json();
      setDataConsult(data);
      setErrorsConsult(200);
    } catch (error) {
      const message = await translateM(error.message);
      setErrorMessage(message);
      setErrorsConsult(parseInt(error.status));
    } finally {
      setLoading(false);
    }
  }

  return {
    dataConsult,
    setDataConsult,
    errorsConsult,
    setErrorsConsult,
    errorMessage,
    setErrorMessage,
    loading,
    fecthingData,
  };
}
