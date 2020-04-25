const fetch = require('node-fetch');
const api = require('./api.json');

function printMessage(city, weather) {
  console.log(`The temperature in ${city} is ${weather.main.temp}F and the humidity is ${weather.main.humidity}.`);
}

function get(query) {
  if (isNaN(query)) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}&units=imperial`)
      .then(res => res.json())
      .then(json => printMessage(query, json));
  } else {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query},us&appid=${api.key}&units=imperial`)
    .then(res => res.json())
    .then(json => printMessage(json.name, json));
  }
}

module.exports.get = get;
