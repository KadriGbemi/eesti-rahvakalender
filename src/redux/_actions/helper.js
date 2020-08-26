const getOneDay = 1000 * 3600 * 24;
export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function dateFormatToISO(value) {
  return value.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}
export function dateFormat(date) {
  const getMonth = dateFormatToISO(date.getMonth() + 1);
  const getDate = dateFormatToISO(date.getDate());
  return date.getFullYear() + '-' + getMonth + '-' + getDate;
}
export function getDateOfWeek(dateInput, type, day) {
  return type === 'start'
    ? new Date(dateInput.valueOf() - getOneDay * day)
    : new Date(dateInput.valueOf() + getOneDay * day);
}
export function getDateRange(startDate, data) {
  const getData = JSON.parse(JSON.stringify(data));
  let i = 0;
  while (i <= 6) {
    const date = getDateOfWeek(startDate, 'dateRange', i);
    const key = dateFormat(date);
    const holidayDate = { day: days[date.getDay()], date };
    getData.holidays[key] = getData.holidays[key]
      ? { holidayDate, holidayType: getData.holidays[key] }
      : { holidayDate, holidayType: null };
    i++;
  }
  return getData.holidays;
}
