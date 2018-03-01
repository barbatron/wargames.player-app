// import axios from 'axios';
import apiKeys from './secrets/apiKeys.json';
import {Observable} from 'rxjs';

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

const createObservable = positionOptions => {
  const source = new Observable(observer => {
    const watchId = navigator.geolocation.watchPosition(
      position => observer.next(position),
      err => observer.error(err),
      positionOptions);
    return () => navigator.geolocation.clearWatch(watchId);
  });
  return source;
};

export {geolocate, createObservable};
