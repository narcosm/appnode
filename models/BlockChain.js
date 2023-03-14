const Block = require('./Block');

class BlockChain {

    constructor() {
        this.chain = [this.crearBloqueGenesis()];
        this.dificultad = 4;
    }
    crearBloqueGenesis() {
        return new Block('Bloque Genesis', '0');
    }

    getUltimoBloque() {
        return this.chain[this.chain.length - 1];
    }

    agregarBloque(nuevoBloque) {
        nuevoBloque.hashPrevio = this.getUltimoBloque().hash;
        nuevoBloque.id = this.getUltimoBloque().id + 1;
        nuevoBloque.minarBloque(this.dificultad)
        this.chain.push(nuevoBloque);
    
    }

    validaChain() {

        for (let i = 1; i < this.chain.length; i++) {
            let bloqueActual = new Block({ cantidad: 10 });
            bloqueActual.data = this.chain[i].data;
            bloqueActual.hash = this.chain[i].hash;
            bloqueActual.hashPrevio = this.chain[i].hashPrevio;
            bloqueActual.id = this.chain[i].id;
            bloqueActual.nonce = this.chain[i].nonce;
            bloqueActual.timestamp = this.chain[i].timestamp;
            const bloqueAnterior = this.chain[i - 1];

            if (bloqueActual.hash != bloqueActual.calcularHash()) {
                return false;
            }
            if (bloqueActual.hashPrevio != bloqueAnterior.hash) {
                return false;
            }
        }
        return true;
    }

}

module.exports = BlockChain;