const axios = require('axios');

const getLatLngPlace = async(address) => {

  const encodeUrl = encodeURI(address);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: { 'X-RapidAPI-Key': '811a97332emshe0d07b7e606e966p18911cjsn7d7d0698b3ee' }
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new error(`No hay resultados para ${address}`);
  }

  const data = resp.data.Results[0];
  const place = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    place,
    lat,
    lng
  };
};

module.exports = {
  getLatLngPlace
}