import Card from "./Card";

const NoLocationFound = ({ location }) => {
  return (
    <Card>
      <p>
        {" "}
        No Location found for this <span className="font-bold">{location}</span>
      </p>
    </Card>
  );
};

export default NoLocationFound;
