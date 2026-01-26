const marvel=["thor","spiderman"]
const dc=["superman","batman"]

//marvel.push(dc)
//console.log(marvel[2][0]);
// const newHero=marvel.concat(dc)//in concat we need to store both array in separate one 
// console.log(newHero);

// const all_hero=[...marvel,...dc]//spread operator...
// console.log(all_hero);

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real=another_array.flat(Infinity)//nested array into single
// console.log(real);


console.log(Array.isArray("ACB"))
console.log(Array.from("acb"))
console.log(Array.from({name:"ABC"})) //* result will be [] because we need to specify whether key to be convert or pair

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))