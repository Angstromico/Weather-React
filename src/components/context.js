import React, { useReducer, useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [values, setValues] = useReducer(
    (values, newValue) => ({ ...values, ...newValue }),
    {
      city: '',
      country: '',
    }
  );
  const [result, setResult] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { city, country } = values;

    if (!city || !country) {
      setAlert(true);
      setResult(false);
      return;
    }

    const appId = 'ecc881b8a6a2186f7337b8bb0ec2d427';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

    //Query to API with Fetch API
    fetch(url)
      .then((respond) => {
        return respond.json();
      })
      .then((data) => setResult(data))
      .catch((error) => console.log(error));
  };
  const htmlWeather = () => {
    if (result) {
      const kelvin = 273.15;
      const { name, weather, main } = result;
      const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
      return (
        <div className="row">
          <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
            <div className="card-panel light-blue align-center">
              <span className="white-text">
                <h2>Weather Result: {name}</h2>
                <p className="temperatura">
                  Current Temperature: {(main.temp - kelvin).toFixed(2)} °C
                  <img src={icon} alt={`Weather of ${name}`} />
                </p>
                <p>Max: {(main.temp_max - kelvin).toFixed(2)} °C</p>
                <p>Min: {(main.temp_min - kelvin).toFixed(2)} °C</p>
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    const eliminateAlert = setTimeout(() => {
      setAlert(false);
    }, 5000);
    return () => clearTimeout(eliminateAlert);
  }, [alert]);
  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        values,
        setValues,
        alert,
        result,
        htmlWeather,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
