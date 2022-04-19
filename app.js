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
    // console.log("this is the data", pokemon)

    // var jsonObj = JSON.parse(pokemon);
    // console.log("this is the json object",jsonObj);

    const pokemonData = pokemon.map((o) => JSON.stringify(o))
    console.log("strings it is", pokemonData[17])

  

    fs.writeFile("output.json", pokemonData.toString(), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
    
})();

