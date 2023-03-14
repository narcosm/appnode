const BlockChain = require('./models/BlockChain.js');
const Block = require('./models/Block.js');
let sealRing = new BlockChain();
console.log('Minar bloque 1');
sealRing.agregarBloque(new Block( { cantidad: 10 }));
console.log('Minar bloque 2');
sealRing.agregarBloque(new Block( { cantidad: 40 }));
console.log('Minar bloque 3');
sealRing.agregarBloque(new Block( { cantidad: 1 }));

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

console.log(JSON.stringify(sealRing, null, 4));

console.log(sealRing.validaChain());

/*console.log(sealRing.validaChain());

sealRing.chain[1].data = { cantidad: 200 };
sealRing.chain[1]. hash = sealRing.chain[1].calcularHash();

console.log(JSON.stringify(sealRing, null, 4));

console.log(sealRing.validadChain());
*/

