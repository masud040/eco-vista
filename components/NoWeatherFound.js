import Link from "next/link";
import Card from "./Card";

const NoWeatherFound = ({ location }) => {
  return (
    <Card>
      <p className="mb-2">
        {" "}
        No Weather found for this{" "}
        <span className="text-lg font-bold">{location}</span>
      </p>
      <Link href={"/"} className="text-indigo-500">
        Back to home
      </Link>
    </Card>
  );
};

export default NoWeatherFound;
