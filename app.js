// Import dependencies 
const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require("json2csv");

(async () => {

    // Load the pokemon data 
    const pokemon = await csv().fromFile("pokemon.csv");

    // Show the pokemon data
    // console.log('MY POKEMONS', pokemon[0]);
    // console.log('MY POKEMONS info', pokemon[0].Name, pokemon[0].HP);
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

function builData(dataInfo) {
    d3.json("samples.json").then((data) => {
        var metadata = data.Information;
        var resultsarray = Information.filter(dataObject =>
            dataObject.id == dataInfo);
        var result = resultsarray[0]
        var panel = d3.select("#Pokémon-Data");
        panel.html("");
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
        });
    });
}

// var trace1 = {
//     type: 'bar',
//     x: ["Name"],
//     y: ["Generation"],
//     marker: {
//         color: '#C8A2C8',
//         line: {
//             width: 2.5
//         }
//     }
//   };
  
//   var data = [ trace1 ];
  
//   var layout = { 
//     title: 'Responsive to window\'s size!',
//     font: {size: 18}
//   };
  
//   var config = {responsive: true}
  
//   Plotly.newPlot('myDiv', output.json, layout, config );



