export async function getLocationData(lat, long) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
    );
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
}
