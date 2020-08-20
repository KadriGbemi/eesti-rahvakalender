import axios from 'axios';

axios.defaults.baseURL =
  'https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays';

export function getEvents(startDate, endDate) {
  return axios
    .get()
    .then((response) => {
    //   return response.data;
    });
}
