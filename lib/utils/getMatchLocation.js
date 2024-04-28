export default async function getMatchLocation(terms) {
  const response = await fetch("http://localhost:3000/api/location");
  const data = await response.json();
  const found = data.filter((location) =>
    location.name.toLowerCase().includes(terms.toLowerCase())
  );
  return found;
}
