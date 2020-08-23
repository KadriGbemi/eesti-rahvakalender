import axios from 'axios';

axios.defaults.baseURL =
  'https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays';

export function getEvents(startDate, endDate) {
  return axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      apiKey: '7ccf26818346aa6f97f2e9bf0b5f4cdd',
      startDate: startDate,
      endDate: endDate,
    },
  });
}

