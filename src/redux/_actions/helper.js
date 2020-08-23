const getOneDay = 1000 * 3600 * 24;
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function dateFormatToISO(date) {
  const getMonth = (date.getMonth() + 1).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return date.getFullYear() + '-' + getMonth + '-' + date.getDate();
}
export function getDateOfWeek(dateInput, type, day) {
  return type === 'start'
    ? new Date(dateInput.valueOf() - getOneDay * day)
    : new Date(dateInput.valueOf() + getOneDay * day);
}
export function getDateRange(startDate, endDate, data) {
  const getData = JSON.parse(JSON.stringify(data));
  let i = 0;
  while (i < endDate.getDay() + 1) {
    const date = getDateOfWeek(startDate, 'dateRange', i);
    const key = dateFormatToISO(date);
    getData.holidays[key] = getData.holidays[key]
      ? getData.holidays[key]
      : date;
      getData[days[i]] = { day: days[i], date };
    i++;
  }
  return getData;
}
