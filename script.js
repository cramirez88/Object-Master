const pokémon = Object.freeze([
      { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
      { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
      { "id": 9,   "name": "Blastoise",  "types": ["water"] },
      { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
      { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
      { "id": 23,  "name": "Ekans",      "types": ["poison"] },
      { "id": 24,  "name": "Arbok",      "types": ["poison"] },
      { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
      { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
      { "id": 52,  "name": "Meowth",     "types": ["normal"] },
      { "id": 63,  "name": "Abra",       "types": ["psychic"] },
      { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
      { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
      { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
      { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
      { "id": 98,  "name": "Krabby",     "types": ["water"] },
      { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
      { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
      { "id": 133, "name": "Eevee",      "types": ["normal"] },
      { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
      { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
      { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
      { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
  ]);

  
// an array of pokémon objects where the id is evenly divisible by 3

const divByThree = pokémon.filter(poke => poke.id % 3 === 0)
console.log(divByThree)

// an array of pokémon objects that are "fire" type

const fireType = pokémon.filter(poke => poke.types.includes('fire'))
console.log(fireType)

//an array of pokémon objects that have more than one type

const numOfTypes = pokémon.filter(poke => poke.types.length > 1)
console.log(numOfTypes)

// an array with just the names of the pokémon

const names = pokémon.map(poke => poke.name)
console.log(names)

// an array with just the names of pokémon with an id greater than 99

const idGreaterThan99 = pokémon.filter(poke => poke.id > 99).map(poke => poke.name)
console.log(idGreaterThan99)

// an array with just the names of the pokémon whose only type is poison

const poison = pokémon.filter(poke => poke.types.includes('poison'))
console.log(poison)

// an array containing just the first type of all the pokémon whose second type is "flying"

const secondType = pokémon.filter(poke => poke.types[1] === 'flying')
console.log(secondType)

// a count of the number of pokémon that are "normal" type

const totalNormal = pokémon.filter(poke => poke.types.includes('normal')).length
console.log(totalNormal)