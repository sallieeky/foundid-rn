import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

const getCurentLocation = async () => {
  Geolocation.getCurrentPosition(
    async position => {
      const CO = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const geocoder = await Geocoder.geocodePosition(CO);
      const response = {
        coords: CO,
        detail: geocoder,
      };
      return response;
    },
    error => {
      alert('gagal');
    },
    {enableHighAccuracy: true},
  );
};

export default getCurentLocation;
