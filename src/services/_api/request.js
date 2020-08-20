import axios from 'axios';

axios.defaults.baseURL =
  'https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays';

const getApiKey = "7ccf26818346aa6f97f2e9bf0b5f4cdd";

export function getEvents(startDate, endDate) {
  return axios
    .get()
    .then((response) => {
    //   return response.data;
    });
}
