import AQIComponent from "@/components/AQIComponent";

const AQIPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <AQIComponent lat={latitude} long={longitude} />;
};

export default AQIPage;
