const axios = require('axios');

const getWeather = async(lat, lng) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0b781369032dab768860bebcb3833a91&units=metric`);

  return resp.data.main.temp;

};

module.exports = {
  getWeather
};