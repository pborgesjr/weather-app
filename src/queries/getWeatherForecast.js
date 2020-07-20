import weatherAPI from '../services/weatherAPI';
import {APPID} from '../config/weatherAPI';
import {Alert} from 'react-native';

export const getWeatherForecast = async ({lat, lon}) => {
  try {
    const response = await weatherAPI.get('/weather', {
      params: {
        lat,
        lon,
        appid: APPID,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    Alert.alert(
      'Error while fetching weather forecast information, please try again later!',
    );
  }
};
