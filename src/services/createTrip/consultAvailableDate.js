import { TOKEN, URL_API } from "../../config"
import { translateM } from "./translate"


export async function consultAvailableDate(addError, date, addValueToKey) {
    try {
        const response = await fetch(URL_API + "trip-available-date/" + date, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: TOKEN,
            }
        })
        if (!response.ok) {
            const message = await response.json()
            throw { status: response.status, message: message.message }
        }
        const data = await response.json()
        if (data.avaliable) {
            addError("scheduleDay", null)
        }
    } catch (e) {
        const messageEs = await translateM(e.message)
        addError("scheduleDay",messageEs)
        addValueToKey("scheduleDay", "")
    }
}
