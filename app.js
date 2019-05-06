const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'city address to obtain weather',
    demand: true
  }
}).argv;

// place.getLatLngPlace(argv.address)
//   .then(console.log);

// weather.getWeather(40.750000, -74.000000)
//   .then(console.log)
//   .catch(console.log)

const getInfo = async(address) => {

  try {
    const coord = await place.getLatLngPlace(address);
    const temp = await weather.getWeather(coord.lat, coord.lng);
    return `The temperature in ${coord.place} is ${temp}`;
  } catch (error) {
    return `The temperature in ${address} could not be obtained`;
  }

};

getInfo(argv.address)
  .then(console.log)
  .catch(console.log);