import { URL_API } from "../../config"

export async function consultAvailableDate(addError,errors,date,addValueToKey){
    if (errors?.scheduleDay == null && date !== "") {
        try {
            const response = await fetch(URL_API + "trip-available-date/" + date, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: "Token 137b997563e98f91956a9779d5a15ea4f852a8f1",
                }
            })
            if (!response.ok) {
                throw new Error(response.status)
            }
            const data = await response.json()
            if (!data.avaliable) {
                addError("scheduleDay", "La fecha seleccionada se encuentra ocupada")
                addValueToKey("scheduleDay","")
            } else {
                addError("scheduleDay", null)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}