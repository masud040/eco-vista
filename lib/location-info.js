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

export async function getAllLocation() {
  try {
    const res = await fetch("http://localhost:3000/api/location");
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
}

export async function getLocationByName(locationName) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
}

export async function getLocationLatLong(location, lat, lon) {
  if (lat && lon) {
    return { lat, lon };
  }
  if (location) {
    const resolve = await getLocationByName(location);
    return { lat: resolve.latitude, lon: resolve.longitude };
  }
}
