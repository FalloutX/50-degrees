import axios from 'axios';
import apiConfig from '../apiConfig.json';


const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = apiConfig.key;

const api = {
  getWeather: function (place) {
    return axios.get(`${BASE_URL}/weather`, {
      params: {
        q: place,
        type: 'accurate',
        APPID: API_KEY
      }
    })
    .then(resp => resp.data);
  },
  getDailyForecast: function (place, noOfDays) {
    return axios.get(`${BASE_URL}/forecast/daily`, {
      params: {
        q: place,
        type: 'accurate',
        APPID: API_KEY,
        cnt: noOfDays
      }
    })
    .then(resp => resp.data);
  }
};


export default api;
