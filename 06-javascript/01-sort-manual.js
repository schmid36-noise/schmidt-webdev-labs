const pokemons = [
  { id: 1, name: "Bulbasaur", types: ["Grass", "Poison"] },
  { id: 2, name: "Ivysaur", types: ["Grass", "Poison"] },
  { id: 3, name: "Venusaur", types: ["Grass", "Poison"] },
  { id: 4, name: "Charmander", types: ["Fire"] },
  { id: 5, name: "Charmeleon", types: ["Fire"] },
  { id: 6, name: "Charizard", types: ["Fire", "Flying"] },
  { id: 7, name: "Squirtle", types: ["Water"] },
  { id: 8, name: "Wartortle", types: ["Water"] },
  { id: 9, name: "Blastoise", types: ["Water"] },
  { id: 10, name: "Caterpie", types: ["Bug"] },
  { id: 11, name: "Metapod", types: ["Bug"] },
  { id: 12, name: "Butterfree", types: ["Bug", "Flying"] },
  { id: 13, name: "Weedle", types: ["Bug", "Poison"] },
  { id: 14, name: "Kakuna", types: ["Bug", "Poison"] },
  { id: 15, name: "Beedrill", types: ["Bug", "Poison"] },
  { id: 16, name: "Pidgey", types: ["Normal", "Flying"] },
  { id: 17, name: "Pidgeotto", types: ["Normal", "Flying"] },
  { id: 18, name: "Pidgeot", types: ["Normal", "Flying"] },
  { id: 19, name: "Rattata", types: ["Normal"] },
  { id: 20, name: "Raticate", types: ["Normal"] },
];

//Note - I had done the entire thing manually before considering
//the arrays had any built in functionality regarding sorting because....?
//either way i'm not deleting all this work after looking at the videos so here you get this too

const sortPokemons = function logSortedPokemons(sortType) {
  const sortedPokemons = [];

  if (sortType.includes("numerically")) {
    //numerical sort, nothing needs to happen just copy each element over
    for (item of pokemons) {
      if (sortType.includes("descend")) {
        sortedPokemons.splice(0, 0, item);
      } else {
        sortedPokemons.push(item);
      }
    }
  } else {
    //alphabetical sort
    //get some sort of baseline, start with the first for simplicity

    tempArray = [];
    tempArray.push(pokemons[0]);

    for (item of pokemons) {
      //iterate through each pokemon and compare it against the baseline to eventually get the first in order
      if (item.id == 1) {
        //do nothing with the first element since we already added it
      } else {
        index = 0;
        len = tempArray.length;

        toAdd = null;
        for (sortedItem of tempArray) {
          if (
            sortedItem != null &&
            item.name.localeCompare(sortedItem.name) == -1
          ) {
            //if item being compared is earlier than the current element of array, it must come before it in order and should be appended at that point
            toAdd = item;
          } else if (index < len) {
            //if we havent gone through all the sorted items yet, go to the next one
            index += 1;
          }
        }

        if (toAdd == null) {
          //we've gone through all the items, it must be last
          toAdd = item;
        }

        //add pokemon to sorted array
        tempArray.splice(index, 0, toAdd);
      }
    }

    //descending order sort
    for (item of tempArray) {
      if (sortType.includes("descend")) {
        //append first element to beginning
        sortedPokemons.splice(0, 0, item);
      } else {
        //append first element to end
        sortedPokemons.push(item);
      }
    }
  }

  return sortedPokemons;
};

console.log(sortPokemons("numerically, in ascending order"));
console.log(sortPokemons("numerically, in descending order"));
console.log(sortPokemons("alphabetically, in ascending order"));
console.log(sortPokemons("alphabetically, in descending order"));
