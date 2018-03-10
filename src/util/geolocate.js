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
    console.log('Initiating watch position');
    const watchId = navigator.geolocation.watchPosition(
      position => observer.next(position),
      err => observer.error(err),
      positionOptions);
    return () => {
      console.log('Clearing watch position');
      navigator.geolocation.clearWatch(watchId);
    };
  });
  return source;
};

export {geolocate, createObservable};
