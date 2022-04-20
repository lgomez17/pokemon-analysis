var button = d3.select("#click-me");

// derived sample code from wk14 activity 2 lesson 9 
// Sort the data by attack in descending order
let pokemonAttack = data.sort((a, b) => b.Atk - a.Atk);

// Slice the first 20 objects for plotting
slicedData = pokemonAttack.slice(0, 20);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the attack data
let trace1 = {
  x: reversedData.map(object => object.Atk),
  y: reversedData.map(object => object.name),
  text: reversedData.map(object => object.name),
  name: "Pokemon",
  type: "bar",
  orientation: "h"
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: "Top 20 Pokémon with Highest Base Attack",
  margin: {
    l: 350,
    r: 150,
    t: 70,
    b: 75
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);







// // start second plot
// let pokemonGeneration = data.sort((a, b) => b.Gen - a.Gen);

// // Slice the first 10 objects for plotting
// slicedData = pokemonGeneration.slice(0, 20);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// Trace2 for the Data
// let trace2 = {
//   x: reversedData.map(object => object.Gen),
//   y: reversedData.map(object => object.name),
//   text: reversedData.map(object => object.name),
//   name: "Pokemon",
//   type: "bar",
//   orientation: "h"
// };

// // Data array
// // `data` has already been defined, so we must choose a new name here:
// let traceData2 = [trace2];

// // Apply a title to the layout
// let layout2 = {
//   title: "Top 25 Pokémon with Highest Base Attack",
//   margin: {
//     l: 350,
//     r: 150,
//     t: 70,
//     b: 75
//   }
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot2", traceData, layout2);

// // Event handlers are just normal functions that can do anything you want
// button.on("click", function() {
//   d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
// });

// var data = [{
//     values: [19, 26, 55],
//     labels: ['Residential', 'Non-Residential', 'Utility'],
//     type: 'pie'
//   }];
  



//   var layout2 = {
//     height: 400,
//     width: 500
//   };
  
//   Plotly.newPlot('plot2', data, layout2);


var pieDiv = document.getElementById("pie-chart");
 
var traceA = {
  type: "pie",
  values: [Generation, 4916438, 4776980, 3100950, 2083210],
  labels: ['Russia', 'Canada', 'Brazil', 'United States', 'China']
};
 
var data = [traceA];
 
var layout2 = {
  title: "Area Under Forest for Different Countries"
};
 
Plotly.plot(pieDiv, data, layout);