const BlockChain = require('./models/BlockChain.js');
const Block = require('./models/Block.js');
let cutreCoin = new BlockChain();
console.log('Minar bloque 1');
cutreCoin.agregarBloque(new Block( { cantidad: 10 }));
console.log('Minar bloque 2');
cutreCoin.agregarBloque(new Block( { cantidad: 40 }));
console.log('Minar bloque 3');
cutreCoin.agregarBloque(new Block( { cantidad: 1 }));

console.log(new Date().toDateString());
console.log(new Date().toISOString());
console.log(new Date().toJSON());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleString());
console.log(new Date().toString());
console.log(new Date().toTimeString());
console.log(new Date().toUTCString());
console.log(new Date().getTime().toString());
let sol = new Date().getTime().toString();
console.log(new Date(parseInt(sol)).toString());

console.log(JSON.stringify(cutreCoin, null, 4));

console.log(cutreCoin.validaChain());

/*console.log(cutreCoin.validaChain());

cutreCoin.chain[1].data = { cantidad: 200 };
cutreCoin.chain[1]. hash = cutreCoin.chain[1].calcularHash();

console.log(JSON.stringify(cutreCoin, null, 4));

console.log(cutreCoin.validadChain());
*/

