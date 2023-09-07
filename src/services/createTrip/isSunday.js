export function isSunday(date){
    const dateSelected = new Date(date)
    // 0 es la representacion de un dia domingo
    return dateSelected.getDay() === 0
}