const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[1][3])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [ 1 , 2 ,3 , [4 , 5 , 6] , [7 ,8] ]

const real_another_array =  another_array.flat(Infinity)

console.log(real_another_array);



console.log(Array.isArray("Nisarg"))
console.log(Array.from("Nisarg"))
console.log(Array.from({name: "Nisarg"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2 ,score3));