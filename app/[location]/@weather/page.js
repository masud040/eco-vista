import NoWeatherFound from "@/components/NoWeatherFound";
import WeatherComponent from "@/components/WeatherComponent";
import { getLocationLatLong } from "@/lib/location-info";

const Weather = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const result = await getLocationLatLong(location, latitude, longitude);
  if (result?.lat && result?.lon) {
    return <WeatherComponent lat={result?.lat} long={result?.lon} />;
  }
  return <NoWeatherFound />;
};

export default Weather;
