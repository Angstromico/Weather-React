import React from 'react';
import { useGlobalContext } from './context';
const Weather = () => {
  const { htmlWeather } = useGlobalContext();
  return <div className="container">{htmlWeather()}</div>;
};
export default Weather;
