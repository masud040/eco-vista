import { getWeatherInfo } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

export default async function TemperatureComponent({ lat, long }) {
  const { main, description } = await getWeatherInfo(lat, long);

  return (
    <Card>
      <h6 class="feature-name">Current Weather</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/icons/icon_rain.png"
          alt="rain icon"
          width={18}
          height={18}
        />
        <h3 class="feature-title">{main}</h3>
        <span class="feature-name">{description}</span>
      </div>
    </Card>
  );
}
