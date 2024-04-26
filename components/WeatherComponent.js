import { getWeatherInfo } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

const WeatherComponent = async ({ lat, long }) => {
  const { main, description } = await getWeatherInfo(lat, long);

  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_rain.png"
          alt="rain icon"
          width={18}
          height={18}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
