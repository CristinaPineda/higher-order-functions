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

const randomNumbers = [36, 99, 37, 63];

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37);

console.log(numbersGreaterThan37);

//Exemplo com objeto usando FILTER
const tarantinoMovies = [
    {name: 'Bartardos Inglórios', release: 2009},
    {name: 'Pulp Fiction', release: 1994},
    {name: 'Kill Bill: Volume 2', release: 2004},
    {name: 'Quatro Quartos', release: 1995},
    {name: 'Sin City', release: 2005},
    {name: 'Era uma vez em... Hollywood', release: 2019},
    {name: 'Django Livre', release: 2012},
    {name: 'Cães de Aluguel', release: 1992},
    {name: 'À Prova da Morte', release: 2007},
    {name: 'Kill Bill: Volume 1', release: 2003},
]

const moviesBefore2000 = tarantinoMovies.filter(({ release }) => release < 2000);

console.log(moviesBefore2000);
console.table(moviesBefore2000);

// outro exemplo 

const firstTravelerCities = [
    'Sydney', 'Berlim', 'Lisboa', 'Sófia', 'Praga', 'Bali', 'Florianópolis'
]

const secondTravelerCities = [
    'Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb'
]

// exibir as cidades em comum

const commomCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city));

console.log(commomCities)