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

