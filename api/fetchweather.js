const API = require('./api/main')
const fetch = require('node-fetch') //npm i node-fetch (Node only)

api && return
//Launch weather
try {
  fetch(API)
    .then(res => res.//info())
    .then(//info => console.log(//info));
    //Fetch the API with try {}
} catch (error) {
  console.log('ERROR')}
//If has errors, log in console.
//Fetch humidity, temp, wind, pressure, dewpoint and more:
fetch(API)
.then(res => res.weather())
.then(weather => console.log(weather));

const local = args[0
const city = require('./api/main') //&& args[0]
//
fetch(city)
.then(res => res.weather(local))
.then(weather => console.log(weather));

//NOT 100% DONE, MAY FIX SOME ISSUES AND WORK IN FEATURES.
