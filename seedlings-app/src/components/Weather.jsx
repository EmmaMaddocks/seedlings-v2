import {
  Container,
  Flex,
  Text
} from '@chakra-ui/react';
import React from "react";
import Axios from "axios";
const API_KEY = '56a2c31c64a6247e0e851f88799c0dd5';



// const WeatherInfoIcons = {
//   sunset: <img src="https://img.icons8.com/fluency/48/000000/sunset.png"/>,
//   sunrise: <img src="https://img.icons8.com/fluency/48/000000/sunrise.png"/>,
//   humidity: <img src="https://img.icons8.com/fluency/48/000000/hygrometer.png"/>,
//   wind: <img src="https://img.icons8.com/fluency/48/000000/wind.png"/>,
//   pressure: <img src="https://img.icons8.com/fluency/48/000000/atmospheric-pressure.png"/>
// }
const WeatherIcons = {
  '01d': <img src="https://img.icons8.com/fluency/96/000000/sun.png"/>,
  '01n': <img src="https://img.icons8.com/fluency/96/000000/full-moon.png"/>,
  '02d': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-day.png"/>,
  '02n': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-night.png"/>,
  '03d': <img src="https://img.icons8.com/fluency/96/000000/moderate-rain.png"/>,
  '03n': <img src="https://img.icons8.com/fluency/96/000000/moderate-rain.png"/>,
  '04d': <img src="https://img.icons8.com/fluency/96/000000/clouds.png"/>,
  '04n': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-night.png"/>,
  '09d': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-rain.png"/>,
  '09n': <img src="https://img.icons8.com/fluency/96/000000/rainy-night.png"/>,
  '10d': <img src="https://img.icons8.com/fluency/96/000000/partly-cloudy-rain.png"/>,
  '10n': <img src="https://img.icons8.com/fluency/96/000000/rainy-night.png"/>,
  '11d': <img src="https://img.icons8.com/fluency/96/000000/chance-of-storm.png"/>,
  '11n': <img src="https://img.icons8.com/fluency/96/000000/stormy-night.png"/>
   
}


const CityComponent = (props) => {
  const {updateCity, fetchWeather} = props;
  
  return (
    <Flex gap={3} mb={7} direction='column' alignItems='center' justifyContent='center'>

      <img src="https://img.icons8.com/fluency/96/000000/smiling-sun.png" className='weatherLogo' width='70px' height='auto' margin='0px'/>
      <span className='chooseCityLabel'>Find Weather of your city</span>
      <form className='searchBox' onSubmit={fetchWeather}>
        <input placeholder='City' onChange={(event) => updateCity(event.target.value)} />
        <button type='submit'>Search</button>
      </form>
    </Flex>
  );
}


// const WeatherInfoComponent = (props) => {
//   const { name, value } = props;
  
//   return (
//     <div className='infoContainer'>
//       <div className='infoIcon'>
//         {WeatherInfoIcons[name]}
//       </div>
//       <span className='infoLabel'>
//         {value}
//         <span>{name}</span>
//       </span>
//     </div>
//   );
// }

const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  
  return (
    <div className='weatherComponent'>
          <Flex gap={3} mb={7} direction='column' alignItems='center' justifyContent='center'>

      <div className='weatherCondition'>
      <Text textStyle='p' className='location'>{`${weather?.name}, ${weather?.sys?.country}`}</Text>
        {WeatherIcons[weather?.weather[0].icon]}
        <span className='condition'>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {` | ${weather?.weather[0].description}`}
          </span>
      </div>
      </Flex>
    </div>
  );
}


function Weather() {
  const [city, updateCity] = React.useState();
  const [weather, updateWeather] = React.useState();
  
  const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  }
  
  return(
    <Flex direction='column' alignItems='center' justifyContent='center'>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Flex>
  );
}
export default Weather
