

import { useEffect, useState } from 'react';

// Importar estilos de Tailwind CSS
import 'tailwindcss/tailwind.css';
import Footer from '../Componentes/Atomos/ComponentesHeader/ComponentesFooter/Footer';

export interface Tiempo {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  // ... Propiedades de Current ...
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  day: Day;
}

export interface Day {
  avgtemp_c: number;
  condition: Condition;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export const Tiempo = () => {
  const [apiData, setApiData] = useState<Tiempo | null>(null);
  const [location, setLocation] = useState<string>('Caceres');

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=f1f77ccf731c411690c82608231307&q=${location}&days=5&aqi=no&lang=es`
      );
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full p-2 justify-between items-center bg-black">
      <div></div>
      {/* ... Contenido previo ... */}
      <div className="flex flex-col w-full justify-center items-center bg-black">
        <p className="text-white mb-2 md:mr-36">Introduce ciudad: </p>
        <div className="mb-4 md:mb-12 w-full md:w-auto">
          <input className="pl-2 py-2 w-full md:w-auto" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          <button onClick={fetchData} className="ml-0 mt-2 md:ml-2 md:mt-0 px-4 py-3 bg-blue-500 text-white rounded">Buscar</button>
        </div>
        {/* Mostrar el tiempo de los próximos cinco días */}
        {apiData && (
          <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 ">
            {apiData.forecast.forecastday.map((day) => (
              <div
                key={day.date}
                className="bg-gradient-to-r h-full flex w-full flex-col from-cyan-500 to-blue-500 p-4 rounded-lg m-1 cursor-pointer hover:from-cyan-600 hover:to-blue-600 hover:scale-105bg-white w-full p-4 rounded-lg shadow-md text-center"
              >
                <p className="text-black">{day.date}</p>
                <img
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                  className="w-20 h-20 mx-auto mb-2"
                />
                <p className="text-lg font-medium text-white">
                  {day.day.avgtemp_c}°C
                </p>
                <p>{day.day.condition.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
