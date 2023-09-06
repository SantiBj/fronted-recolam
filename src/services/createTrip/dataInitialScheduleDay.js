export function dataInitialScheduleDay(dataTrip) {
    const initialState = {
        scheduleDay: dataTrip.scheduleDay,
        weightAvg: dataTrip.weightAvg
    }

    const initialErrors = {
        scheduleDay: null,
        weightAvg: null
    }

    return {
        initialErrors,
        initialState
    }
}