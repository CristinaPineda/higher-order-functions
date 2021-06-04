// MAP

// Quando usar o map?
// Você quiser obter um novo array com a mesma quantidade
// de itens do original mas, com cada item transformado. 
// ele vai percorrer cada item e retornar um novo array com a transformação que vc quer
// pode receber 3 parametros: 
// .map((item, index, array))

const numbers = [1, 2, 3]

const squareNumbers = numbers.map(item => item ** 2 );
console.log (squareNumbers);

// exemplo com objetos:

const tvShows = [
    {name: 'Breaking Bad', releaseYear: 2008},
    {name: 'Mr. Robot', releaseYear: 2015},
    {name: 'True Detective', releaseYear: 2014},
    {name: 'Hannibal', releaseYear: 2013},
    {name: 'The Handmaid\'s Tale', releaseYear: 2017},
    {name: 'House M.D.', releaseYear: 2004},
    {name: 'Watchmen', releaseYear: 2019},
]

// para pegar somente os nomes:
const showNames = tvShows.map(({ name })=> name)

console.log(showNames);