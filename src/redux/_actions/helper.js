const getOneDay = 1000 * 3600 * 24;

export function dateFormatToISO(date) {
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
}
export function getDateOfWeek(dateInput, type, day) {
  return type === 'start'
    ? new Date(dateInput.valueOf() - getOneDay * day)
    : new Date(dateInput.valueOf() + getOneDay * day);
}


