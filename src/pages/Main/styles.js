import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  height: 100%;
`;

export const TopView = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 20px;
  letter-spacing: 1px;
  color: #fff;
  font-family: 'NunitoSans';
`;

export const TimeText = styled.Text`
  font-size: 45px;
  color: #fff;
  font-family: 'NunitoSans';
`;

export const LocationText = styled.Text`
  font-size: 20px;
  letter-spacing: 2px;
  color: #fff;
  font-family: 'NunitoSans';
`;

export const MiddleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WeatherImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  background: transparent;
`;

export const BottomView = styled.View`
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;

export const TemperatureView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TemperatureCelsiusText = styled.Text`
  font-size: 50px;
  color: #fff;
  letter-spacing: 2px;
  font-family: 'NunitoSans';
`;

export const TemperatureFarenheitText = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 10px;
  font-family: 'NunitoSans';
`;

export const WeatherInfoText = styled.Text`
  font-size: 25px;
  color: #fff;
  letter-spacing: 2px;
  font-family: 'NunitoSans';
`;
