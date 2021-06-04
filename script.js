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

const people = [
    { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco'},
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo'},
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas'},
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais'},
    { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo'},
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília'},
]

const agesFrequency = people.reduce((accumulator, { age }) => {
    accumulator[age] = accumulator[age] + 1 || 1 ;

    return accumulator
}, {});

console.log(agesFrequency);

/*
resultdo desejado:

    { 18: 3, 19: 2, 20: 1 }
*/

// -------------------------------------------------------------------

// USO DE MAP, FILTER E REDUCE JUNTOS

const topBrazilMovies = [
    { title: 'Vingadores: Ultimato', peopleAmount: 19_686_119, distributedBy: 'Disney' },
    { title: 'Titanic', peopleAmount: 17_050_000, distributedBy: 'Paramount / 20th Century' },
    { title: 'O Rei Leão', peopleAmount: 16_267_649, distributedBy: 'Disney' },
    { title: 'Vingadores: Guerra Infinita', peopleAmount: 14_572_181, distributedBy: 'Disney' },
    { title: 'Tubarão', peopleAmount: 13_035_000, distributedBy: 'Universal' },
    { title: 'Nada a Perder', peopleAmount: 11_944_985, distributedBy: 'Paris Filmes' },
    { title: 'Os Dez Mandamentos', peopleAmount: 11_259_536, distributedBy: 'Paris / Downtown Filmes' },
    { title: 'Tropa de Elite 2', peopleAmount: 11_204_815, distributedBy: 'Zazen' },
    { title: 'Os Vingadores', peopleAmount: 10_968_065, distributedBy: 'Disney' },
    { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10_735_524, distributedBy: 'Embrafilme' },
]

const onlyDisney = topBrazilMovies
.filter(({ distributedBy }) => distributedBy === 'Disney')
.reduce((accumulator, { peopleAmount }) => accumulator + peopleAmount, 0);

console.log(onlyDisney);  // total de pessoas que assistiram os filmes da Disney

// -------------------------------------------------------------------

const pets = [
    { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
    { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
    { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
    { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
    { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
    { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' },
]

// obter idade dos cães em escala humana

const getDogs = ({ type }) => type === 'Dog';
const convertToHumanAge = ({ name, age }) => ({
    name,
    convertedAge: age * 7,
});

console.log(
    pets
        .filter(getDogs)
        .map(convertToHumanAge)
);





