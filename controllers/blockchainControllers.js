const logger = require('../logger');
const BlockChain = require('../models/BlockChain.js');
const Block = require('../models/Block.js');
//const { blockchain } = require('../models');
const blockchainController = module.exports;
const log = logger.getLogger('blockchainController');

let cutreCoin = new BlockChain();

// Trae el blockchain y lo remplaza en la API
blockchainController.createBlockChain = async (req, res) => {
    const { body } = req;
    log.info(`createBlockChain body=${JSON.stringify(body)} `);
    cutreCoin.chain = body.chain;
    // console.log('Minar bloque ' + cutreCoin.chain.length);
    // cutreCoin.agregarBloque(new Block({ cantidad: 500 }));
    console.log(JSON.stringify(cutreCoin, null, 4));
    res.status(201).json(cutreCoin);
}

// Mina una bloque y entreag la lista
blockchainController.minaBlock = async (req, res) => {
    const { body } = req;
    /// log.info(`minaBlock body=${JSON.stringify(body)} `);
    if (cutreCoin.chain.length > 1) {
        if (cutreCoin.validaChain()) {
            console.log('Minar bloque ' + cutreCoin.chain.length);
            cutreCoin.agregarBloque(new Block(body));
        } else {
            console.log("No se valido");
        }
    }
    console.log(JSON.stringify(cutreCoin, null, 4));
    res.status(201).json(cutreCoin);
}

// imprime la lista actual en la API
blockchainController.listBlockchain = async (req, res) => {
    if (cutreCoin.chain.length > 1) {
        console.log('Si hay bloques aqui ');
    } else {
        console.log('No hay bloques aqui ');
    }

    res.json(cutreCoin);
}


//valida la blockchain actual del APP
blockchainController.validaBlockchain = async (req, res) => {
    let rta = false;
    if (cutreCoin.chain.length > 1) {
        rta = cutreCoin.validaChain();
    }

    res.json(rta);
}