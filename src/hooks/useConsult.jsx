import { useState } from "react"
import { URL_API } from "../config"

export function useConsult(url, method = "GET", body = null) {

    const [dataConsult, setDataConsult] = useState(null)
    const [errorsConsult, setErrorsConsult] = useState(null)
    const [loading, setLoading] = useState(true)

    const headersConsult = {
        method: method,
        body: body != null ? JSON.stringify(body) : null,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: "Token 137b997563e98f91956a9779d5a15ea4f852a8f1"
        }
    }

    async function fecthingData() {
        try {
            const response = await fetch(URL_API + url, headersConsult)
            if (!response.ok) {
                throw new Error(response.status)
            }
            const data = await response.json()
            setDataConsult(data)
        } catch (error) {
            setErrorsConsult(error.message)
        } finally {
            setLoading(false)
        }

    }

    return {
        dataConsult,
        errorsConsult,
        loading,
        fecthingData
    }
}