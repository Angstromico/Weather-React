import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import { useGlobalContext } from './components/context';
function App() {
  const props = { title: 'Weather App' };
  const { result } = useGlobalContext();
  return (
    <section className="app">
      <Header props={props} />
      <Form />
      {result && <Weather />}
    </section>
  );
}

export default App;
