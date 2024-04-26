import { Inter } from "next/font/google";
import Image from "next/image";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
  aqi,
  weather,
  temperature,
  wind,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/images/background.png"
        width={1000}
        height={700}
        className="bg-img"
        alt="background image"
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 py-16 gap-y-8 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children} {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
