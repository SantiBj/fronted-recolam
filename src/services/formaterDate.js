import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export function formaterDate(date) {
    const dateColombia = utcToZonedTime(
        new Date(date), 'America/Bogota'
    )
    const dateFormated = format(dateColombia, 'yyyy-MM-dd HH:mm')

    return dateFormated
}