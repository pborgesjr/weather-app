import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import {setBackgroundColors} from '../../util/setBackgroundColors';
import {formatString} from '../../util/formatString';
import {formatDate, formatHour} from '../../util/formatDate';
import {
  convertKelvinToCelsius,
  convertKelvinToFahrenheit,
} from '../../util/convertTemp';
import {getWeatherForecast} from '../../queries/getWeatherForecast';
import styles from '../../util/textShadow';
import {
  Container,
  TopView,
  DateText,
  TimeText,
  LocationText,
  MiddleView,
  WeatherImage,
  ButtonIcon,
  BottomView,
  TemperatureView,
  TemperatureCelsiusText,
  TemperatureFarenheitText,
  WeatherInfoText,
} from './styles';

const Main = () => {
  const [locationPermission, setLocationPermission] = useState(false);
  const [reload, setReload] = useState(false);
  const [weatherData, setWeatherData] = useState(false);
  const today = new Date();

  async function checkPermission() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        setLocationPermission(true);
      } else {
        setLocationPermission(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  /** useEffect HOOK */
  useEffect(() => {
    /** Load user position and set the values on the userPosition state */
    function loadData() {
      if (locationPermission) {
        Geolocation.getCurrentPosition(
          async (position) => {
            setWeatherData(
              await getWeatherForecast({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              }),
            );
          },
          (error) => {
            console.log(error);
          },
        );
      }
    }
    checkPermission();
    loadData();
  }, [locationPermission, reload]);

  return (
    weatherData && (
      <LinearGradient colors={setBackgroundColors(weatherData.weather[0].id)}>
        <Container>
          <TopView>
            <DateText style={styles.text}>{formatDate(today)}</DateText>
            <TimeText style={styles.text}>{formatHour(today)}</TimeText>
            <LocationText style={styles.text}>{weatherData.name}</LocationText>
          </TopView>

          <MiddleView>
            <WeatherImage
              source={{
                uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
              }}
              alt="weather_img"
            />
            <ButtonIcon onPress={() => setReload(!reload)}>
              <Icon name="refresh" size={60} color="#fff" />
            </ButtonIcon>
          </MiddleView>

          <BottomView>
            <TemperatureView>
              <TemperatureCelsiusText style={styles.text}>
                {convertKelvinToCelsius(weatherData.main.temp)}°C
              </TemperatureCelsiusText>
              <TemperatureFarenheitText style={styles.text}>
                {convertKelvinToFahrenheit(weatherData.main.temp)}°F
              </TemperatureFarenheitText>
            </TemperatureView>

            <WeatherInfoText style={styles.text}>
              {formatString(weatherData.weather[0].description)}
            </WeatherInfoText>
          </BottomView>
        </Container>
      </LinearGradient>
    )
  );
};

export default Main;
