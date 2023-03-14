const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data, hashPrevio = '') {
        //this.timestamp = new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
        this.timestamp = (new Date().getTime()-18000000).toString();
      //console.log("ISOS: "+new Date().toISOString());
      //console.log("UTCS: "+new Date().toUTCString());
        this.id = 0;
        this.data = data;
        this.hashPrevio = hashPrevio;
        this.nonce = 0;
        this.hash = this.calcularHash();
    }

    calcularHash() {
        return SHA256(this.timestamp + this.hashPrevio + JSON.stringify(this.data) + this.nonce).toString();
    }

    minarBloque(dificultad) {
        while (this.hash.substring(0, dificultad) != Array(dificultad + 1).join('0')) {
            this.nonce++;
            this.hash = this.calcularHash();
        }
        console.log('Bloque minado: ' + this.hash);
    }
}

module.exports = Block;
