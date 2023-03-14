const express = require('express');
const { OK } = require('http-status-codes');

const wrap = require('../wrap.js');
const { routers } = require('../constants');

const { blockchainController } = require('../controllers');

const router = express.Router();

// Trae el blockchain y lo remplaza en la API
router.post(routers.BLOCKCHAIN, wrap(blockchainController.createBlockChain));

// Mina una bloque y entreag la lista
router.post(routers.BLOCKCHAIN + "/minar", wrap(blockchainController.minaBlock));

// imprime la lista actual en la API
router.get(routers.BLOCKCHAIN, wrap(blockchainController.listBlockchain));

// valida la blockchain actual del APP
router.get(routers.BLOCKCHAIN + "/valida", wrap(blockchainController.validaBlockchain));

//consulta HTML
router.get(routers.BLOCKCHAIN + "/vista", wrap(blockchainController.listBlockchainHtml));

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
}));

module.exports = router;