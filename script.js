// MAP

// Quando usar o map?
// Você quiser obter um novo array com a mesma quantidade
// de itens do original mas, com cada item transformado. 
// ele vai percorrer cada item e retornar um novo array com a transformação que vc quer
// pode receber 3 parametros: 
// .map((item, index, array))

// const numbers = [1, 2, 3]

// const squareNumbers = numbers.map(item => item ** 2 );
// console.log (squareNumbers);

// // exemplo com objetos:

// const tvShows = [
//     {name: 'Breaking Bad', releaseYear: 2008},
//     {name: 'Mr. Robot', releaseYear: 2015},
//     {name: 'True Detective', releaseYear: 2014},
//     {name: 'Hannibal', releaseYear: 2013},
//     {name: 'The Handmaid\'s Tale', releaseYear: 2017},
//     {name: 'House M.D.', releaseYear: 2004},
//     {name: 'Watchmen', releaseYear: 2019},
// ]

// // para pegar somente os nomes:
// const showNames = tvShows.map(({ name })=> name)

// console.log(showNames);
// console.table(showNames);

// -------------------------------------------------------------------

// FILTER

// Quando usar filter?

// Baseado em uma condição, você quer obter
// um novo array com somete alguns itens 
// do array original

// const randomNumbers = [36, 99, 37, 63];

// const numbersGreaterThan37 = randomNumbers.filter(item => item > 37);

// console.log(numbersGreaterThan37);

// //Exemplo com objeto usando FILTER
// const tarantinoMovies = [
//     {name: 'Bartardos Inglórios', release: 2009},
//     {name: 'Pulp Fiction', release: 1994},
//     {name: 'Kill Bill: Volume 2', release: 2004},
//     {name: 'Quatro Quartos', release: 1995},
//     {name: 'Sin City', release: 2005},
//     {name: 'Era uma vez em... Hollywood', release: 2019},
//     {name: 'Django Livre', release: 2012},
//     {name: 'Cães de Aluguel', release: 1992},
//     {name: 'À Prova da Morte', release: 2007},
//     {name: 'Kill Bill: Volume 1', release: 2003},
// ]

// const moviesBefore2000 = tarantinoMovies.filter(({ release }) => release < 2000);

// console.log(moviesBefore2000);
// console.table(moviesBefore2000);

// // outro exemplo 

// const firstTravelerCities = [
//     'Sydney', 'Berlim', 'Lisboa', 'Sófia', 'Praga', 'Bali', 'Florianópolis'
// ]

// const secondTravelerCities = [
//     'Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb'
// ]

// // exibir as cidades em comum

// const commomCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city));

// console.log(commomCities);

// -------------------------------------------------------------------

// REDUCE

// Quando usar o reduce?
// Você quer reduzir o array à algum tipo de dado

const numbers = [1, 2, 3]
const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(sum);

const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Shadow of the Tomb Raider', price: 101.19 },
    { name: 'Shekiro: Shadows Die Twice', price: 179.99 },
    { name: 'Resident Evil 2', price: 119.90 },
    { name: 'Death Stranding', price: 149.99 },
]

const productList = cart.reduce((accumulator, { name }) => `${accumulator}- ${name}\n`, '');

console.log(productList)
/*
esperado nesse formato: 

    - Nome 1
    - Nome 2
    - Nome 3
*/

