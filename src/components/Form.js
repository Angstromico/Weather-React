import React from 'react';
import { useGlobalContext } from './context';
const Form = () => {
  const { values, setValues, handleSubmit, alert } = useGlobalContext();
  const { city, country } = values;
  return (
    <React.Fragment>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => {
                    setValues({ city: e.target.value });
                  }}
                />
                <label htmlFor="city" className="label">City:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select
                  id="country"
                  name="country"
                  value={country}
                  onChange={(e) => {
                    setValues({ country: e.target.value });
                  }}
                >
                  <option value="" defaultValue>
                    -- Chose a Country --
                  </option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="MX">Mexico</option>
                  <option value="US">United States of America</option>
                  <option value="UK">United Kingdom</option>
                  <option value="VE">República Bolivariana de Venezuela</option>
                  <option value="NO">Norway</option>
                  <option value="RU">Russia</option>
                  <option value="kr">Republic of Korea</option>
                  <option value="nl">Netherlands</option>
                  <option value="PE">Perú</option>
                </select>
                <label htmlFor="country" className="label">Country:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2 buscador">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large yellow accent-4"
                  value="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {alert && (
        <div className="d-flex justify-content-center">
          <div className="alert-message">
            <h2>You must fill all the fields</h2>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Form;
