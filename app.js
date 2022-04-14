// Import dependencies 
const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");

(async () => {

    // Load the pokemon data 
    const pokemon = await csv().fromFile("pokemon.csv");
    
    // Show the pokemon data
    console.log('MY POKEMANS', pokemon[0]);
    console.log('MY POKEMANS info', pokemon[0].Name, pokemon[0].HP);

})();