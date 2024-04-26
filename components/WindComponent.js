import { getWindData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

const WindComponent = async ({ lat, long }) => {
  const { speed, deg } = await getWindData(lat, long);

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/icons/icon_wind.png"
          alt="rain icon"
          width={18}
          height={18}
        />
        <h3 className="feature-title">{speed} meter/sec</h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </Card>
  );
};

export default WindComponent;
