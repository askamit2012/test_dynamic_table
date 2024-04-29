import moment from 'moment'
export const Fun_NestedTernaryOprator = (condition, first, second) => {
    if (condition) {
        return first
    }
    return second
}

export const Fun_IfElseCondition = (...conditions) => {
    conditions.every((condition) => {
        const [cond, callback] = condition
        if (cond) {
            callback()
            return false
        }
        return true
    })
}

export const getDateAndTIme = (datees, timeVal) => {
    // console.log('--------------->>>', datees, timeVal)
    let newDate1 = new Date(datees);
    if (timeVal) {
        newDate1 = new Date(datees + " " + timeVal);
    }

    //** if (type == "between") {
    //**   return newDate1.getFullYear() + "-"
    //**     + ("0" + (newDate1.getMonth() + 1)).slice(-2) + "-"
    //**     + ("0" + newDate1.getDate()).slice(-2)
    //** }
    return newDate1.getFullYear() + "-"
        + ("0" + (newDate1.getMonth() + 1)).slice(-2) + "-"
        + ("0" + newDate1.getDate()).slice(-2) + " "
        + ("0" + newDate1.getHours()).slice(-2) + ":"
        + ("0" + newDate1.getMinutes()).slice(-2) + ":"
        + ("0" + newDate1.getSeconds()).slice(-2);
}

export const convertTimezone = (column, pageConfiguration) => {
    let [year, month, day] = column.date.split('-').map(val => parseInt(val))
    let [hour, minute, second] = column.time.split(':').map(val => parseInt(val))
    let inputTimezone = pageConfiguration.userTimeZone
    let outputTimezone = column.timeZone

    // Create a moment object in input timezone
    let inputMoment = moment.tz([year, month - 1, day, hour, minute, second], inputTimezone);

    // Convert to output timezone
    let outputMoment = inputMoment.clone().tz(outputTimezone);

    return outputMoment.format().split('T')[0];

}