export async function getWeatherInfo(lat, long) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();
    return data?.weather[0];
  } catch (error) {
    console.error(error.message);
  }
}

export async function getTemperatureData(lat, long) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();
    return data?.main;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getWindData(lat, long) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();
    return data?.wind;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getAQIData(lat, long) {
  try {
    const res =
      await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_API_KEY}
    `);
    const data = await res.json();

    return data?.list[0];
  } catch (error) {
    console.log(error.message);
  }
}
