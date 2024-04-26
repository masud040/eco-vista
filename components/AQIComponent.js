import { getAirQuality } from "@/lib/utils/getAirQuality";
import { getAQIData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

export default async function AQIComponent({ lat, long }) {
  const { main, components } = await getAQIData(lat, long);

  return (
    <Card>
      <h6 className="feature-name">Air Pollution & Quality</h6>

      <div className="mt-3 space-y-2 lg:space-y-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Air Quality Index
          </div>
          <span className="text-sm text-right text-white lg:text-base">
            {getAirQuality(main.aqi)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Carbon Monoxide
          </div>
          <span className="text-sm text-right text-white lg:text-base">
            {components.co} µg/m³
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Nitric Oxide
          </div>
          <span className="text-sm text-right text-white lg:text-base">
            {components.no} ppm
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Nitrogen Dioxide
          </div>
          <span className="text-sm text-right text-white lg:text-base">
            {components.no2} ppm
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Ozone
          </div>
          <span className="text-sm text-right text-white lg:text-base">
            {components.o3} µg/m³
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            Sulfur Dioxide
          </div>
          <span className="text-sm text-right text-white lg:text-base">
            {components.so2} ppm
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/icons/icon_air_element.png"
              alt="icon"
              width={18}
              height={18}
            />
            PM2.5
          </div>
          <span className="text-sm text-right text-white lg:text-base">
            {components.pm2_5} µg/m³
          </span>
        </div>
      </div>
    </Card>
  );
}
