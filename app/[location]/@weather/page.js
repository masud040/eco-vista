import WeatherComponent from "@/components/WeatherComponent";

const Weather = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <WeatherComponent lat={latitude} long={longitude} />;
};

export default Weather;
