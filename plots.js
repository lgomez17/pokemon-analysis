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

// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// var data = [{
//     values: [19, 26, 55],
//     labels: ['Residential', 'Non-Residential', 'Utility'],
//     type: 'pie'
//   }];



// pie chart 

console.log("data types", data[0].type1)

fire = 0,
  water = 0,
  normal = 0,
  grass = 0,
  electric = 0,
  ice = 0,
  fighting = 0,
  poison = 0,
  ground = 0,
  flying = 0,
  psychic = 0,
  bug = 0,
  rock = 0,
  ghost = 0,
  dark = 0,
  dragon = 0,
  steel = 0,
  fairy = 0

for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Fire" || data[i].type2 === "Fire") {
    fire += 1
  }
}

for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Water" || data[i].type2 === "Water") {
    water += 1
  }
}

for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Normal" || data[i].type2 === "Normal") {
    normal += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Grass" || data[i].type2 === "Grass") {
    grass += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Electric" || data[i].type2 === "Electric") {
    electric += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Ice" || data[i].type2 === "Ice") {
    ice += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Fighting" || data[i].type2 === "Fighting") {
    fighting += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Poison" || data[i].type2 === "Poison") {
    poison += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Ground" || data[i].type2 === "Ground") {
    ground += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Flying" || data[i].type2 === "Flying") {
    flying += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Psychic" || data[i].type2 === "Psychic") {
    psychic += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Bug" || data[i].type2 === "Bug") {
    bug += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Rock" || data[i].type2 === "Rock") {
    rock += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Ghost" || data[i].type2 === "Ghost") {
    ghost += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Dark" || data[i].type2 === "Dark") {
    dark += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Dragon" || data[i].type2 === "Dragon") {
    dragon += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Steel" || data[i].type2 === "Steel") {
    steel += 1
  }
}
for (let i = 0; i < data.length; i++) {
  if (data[i].type1 === "Fairy" || data[i].type2 === "Fairy") {
    fairy += 1
  }
}

console.log("fireeee", fire)
console.log("water", water)
console.log("normal", normal)

var data2 = [{
  values: [normal, fire, water, grass, electric, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dark, dragon, steel, fairy],
  labels: ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"],
  type: 'pie'
}];

var layout2 = {
  height: 700,
  width: 600,
  margin: {"t": 25, "b": 10, "l": 10, "r": 10},
  title: "Pokemon Types",
  showlegend: true
};

Plotly.newPlot("plot2", data2, layout2);