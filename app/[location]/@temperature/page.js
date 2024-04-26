import TemperatureComponent from "@/components/TemperatureComponent";

const Temparature = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <TemperatureComponent lat={latitude} long={longitude} />;
};

export default Temparature;
