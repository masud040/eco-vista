import country from "@/data/data.json";
export async function GET() {
  return Response.json(country?.ref_country_codes);
}
