import country from "@/data/data.json";
export async function GET(request, { params: { name } }) {
  const found = await country?.ref_country_codes.find(
    (location) => location.name.toLowerCase() === name.toLowerCase()
  );

  return Response.json(found || {});
}
