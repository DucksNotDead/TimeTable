const pixelsInTimePart = 20

export const TimeToPixels = (timeString) => {
    const [hour, minutes] = timeString.split(':')
    const hourPart = (hour==='00'? 24 : Number(hour)) * (60/pixelsInTimePart)
    const minutesPart = Number(minutes) / pixelsInTimePart
    return (hourPart + minutesPart) * pixelsInTimePart
}

export const TimeItemHeight = (timepoint) => {
    return TimeToPixels(timepoint[1]) - TimeToPixels(timepoint[0])
}
