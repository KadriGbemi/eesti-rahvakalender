const getOneDay = 1000 * 3600 * 24;
export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const colors = ["#ce3141", "#ce318f", "#ce7031", "#8fce31"];
export const dateOptions = {
  year: "numeric",
  month: "short",
  day: "2-digit"
};

export function dateFormatToISO(value) {
  return value.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
}
export function dateFormat(dateInput) {
  const date = new Date(dateInput);
  const getMonth = dateFormatToISO(date.getMonth() + 1);
  const getDate = dateFormatToISO(date.getDate());
  return date.getFullYear() + "-" + getMonth + "-" + getDate;
}
export function getDateOfWeek(dateInput, type, day) {
  const date = new Date(dateInput);
  return type === "start"
    ? new Date(date.valueOf() - getOneDay * day)
    : new Date(date.valueOf() + getOneDay * day);
}

export function getSortedDataKey(data) {
  return Object.keys(data || []).sort(function (a, b) {
    return data[a].holidayDate["id"] - data[b].holidayDate["id"];
  });
}
export function handleEventColor(type) {
  let color;
  switch (type) {
    case "folk":
      color = colors[0];
      break;
    case "public":
      color = colors[1];
      break;
    default:
      color = colors[2];
  }
  return color;
}

export function getHolidaysData(startDate, data) {
  const getData = JSON.parse(JSON.stringify(data));
  let i = 0;
  while (i <= 6) {
    const date = getDateOfWeek(startDate, "dateRange", i);
    const key = dateFormat(date);
    const holidayDate = { day: days[date.getDay()], date, id: i };
    getData.holidays[key] = getData.holidays[key]
      ? { holidayDate, holidayType: getData.holidays[key] }
      : { holidayDate, holidayType: null };
    i++;
  }
  return getData.holidays;
}

export function handleDateFormat(dateInput, options) {
  return new Intl.DateTimeFormat(undefined, options).format(
    new Date(dateInput.date || dateInput)
  );
}
