const API = require('./api/main')
const fetch = require('node-fetch') //npm i node-fetch (Node only)
const message = require('discord.js')

api && return
//Launch data
try {
  fetch(API)
    .then(res => res.//info())
    .then(//info => console.log(//info));
    //Fetch the API with try {}
} catch (error) {
  console.log('ERROR')}
//If has errors, log in console.
//Fetch server ID, name and more:
fetch(API)
.then(res => res.data())
.then(data => console.log(data));

const id = message.guild.id
const server = require('./api/main')
//
fetch(server)
.then(res => res.data(id))
.then(data => console.log(id));

//NOT 100% DONE, MAY FIX SOME ISSUES AND WORK IN FEATURES.
