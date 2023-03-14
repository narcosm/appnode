const logger = require('../logger');
const BlockChain = require('../models/BlockChain.js');
const Block = require('../models/Block.js');
//const { blockchain } = require('../models');
const blockchainController = module.exports;
const log = logger.getLogger('blockchainController');

let sealRing = new BlockChain();

// Trae el blockchain y lo remplaza en la API
blockchainController.createBlockChain = async (req, res) => {
    const { body } = req;
    log.info(`createBlockChain body=${JSON.stringify(body)} `);
    sealRing.chain = body.chain;
    // console.log('Minar bloque ' + sealRing.chain.length);
    // sealRing.agregarBloque(new Block({ cantidad: 500 }));
    console.log(JSON.stringify(sealRing, null, 4));
    res.status(201).json(sealRing);
}

// Mina una bloque y entreag la lista
blockchainController.minaBlock = async (req, res) => {
    console.log("entro a minar");
    const { body } = req;
    log.info(`minaBlock body=${JSON.stringify(body)} `);
    if (sealRing.chain.length >= 1) {
        if (sealRing.validaChain()) {
            console.log('Minar bloque ' + sealRing.chain.length);
            sealRing.agregarBloque(new Block(body));
        } else {
            console.log("No se valido");
        }
    }
    console.log(JSON.stringify(sealRing, null, 4));
    res.status(201).json(sealRing);
}

// imprime la lista actual en la API
blockchainController.listBlockchain = async (req, res) => {
    if (sealRing.chain.length > 1) {
        console.log('Si hay bloques aqui ');
    } else {
        console.log('No hay bloques aqui ');
    }

    res.json(sealRing);
}


//valida la blockchain actual del APP
blockchainController.validaBlockchain = async (req, res) => {
    let rta = false;
    if (sealRing.chain.length > 1) {
        rta = sealRing.validaChain();
    }

    res.json(rta);
}

// imprime la lista actual HTML
blockchainController.listBlockchainHtml = async (req, res) => {
    if (sealRing.chain.length > 1) {
        console.log('Si hay bloques aqui ');
    } else {
        console.log('No hay bloques aqui ');
    }

    // res.json(sealRing);
    let rta = "<!DOCTYPE html><html><head><meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1.0'>   <title>Blockchain</title>   </head>   <body>";
    for (let i = 0; i < sealRing.chain.length; i++) {
        let date_ob = new Date(parseInt( sealRing.chain[i].timestamp));
               // prints date & time in YYYY-MM-DD format
        console.log("Fecha: "+date_ob.getFullYear() + "-" + (date_ob.getMonth() + 1) + "-" + date_ob.getDate());
        console.log("Hora: "+date_ob.getHours()+":"+date_ob.getMinutes()+":"+date_ob.getSeconds()+":"+date_ob.getMilliseconds());
     
        
        rta = rta + "<fieldset> <h2>Block #: " + sealRing.chain[i].id + "</h2>  <h3>timestamp: "
            + sealRing.chain[i].timestamp +" - "+date_ob.toLocaleString()
            + "</h3> <h3>nonce: "
            + sealRing.chain[i].nonce
            + "</h3>   <h3>data:</h3>   <fieldset>   <p>"
            + JSON.stringify(sealRing.chain[i].data)
            + "</p>   </fieldset>   <h3>hash previo:</h3>   <textarea rows='3' cols='40' readonly>"
            + sealRing.chain[i].hashPrevio
            + " </textarea>   <h3>hash:</h3>   <textarea rows='3' cols='40' readonly>  "
            + sealRing.chain[i].hash
            + "</textarea>   </fieldset>"
    }

    rta = rta + "</body>   </html>";
    res.send(rta);
} 