// import axios from 'axios';
import apiKeys from './secrets/apiKeys.json';

const apiKey = apiKeys.googleGeolocation;

const geolocate = async () => new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition(position => {
    resolve({
      location: {
        lng: position.coords.latitude,
        lat: position.coords.longitude
      }
    });
  });
});

export {geolocate};
