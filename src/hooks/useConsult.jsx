import { useState } from "react";
import { TOKEN, URL_API } from "../config";
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
      Authorization: TOKEN,
    },
  };

  function resetAll() {
    setDataConsult(null), setErrorsConsult(null);
    setErrorMessage(null);
    setLoading(null);
  }

  async function fecthingData(bodyConsult = null) {
    let headers = null;

    if (bodyConsult !== null && !("target" in bodyConsult)) {
      headers = {
        method: method,
        body: JSON.stringify(bodyConsult),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: TOKEN,
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
      let message;
      if (typeof error.message == "object") {
        const keys = Object.keys(error.message);
        message = await translateM(error.message[keys[0]][0]);
      } else {
        message = await translateM(error.message);
      }

      setErrorMessage(message);
      setErrorsConsult(parseInt(error.status));
    } finally {
      setLoading(false);
    }
  }

  return {
    resetAll,
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
