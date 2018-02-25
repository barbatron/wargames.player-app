import axios from 'axios';
import apiKeys from './secrets/apiKeys.json';

const apiKey = apiKeys.googleGeolocation;

const geolocate = async () => {
  const resp = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`);
  return resp.data;
};

export {geolocate};
