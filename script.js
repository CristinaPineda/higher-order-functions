// function getMultiplier (multiplier) {
//     return function (aNumber) {
//         return aNumber * multiplier
//     }
// }

// refatorando a função acima 
const getMultiplier = multiplier => aNumber => aNumber * multiplier

const double = getMultiplier(2);
const triple = getMultiplier(3);
const quadruple = getMultiplier(4);

console.log(double(5))
console.log(triple(5))
console.log(quadruple(5))