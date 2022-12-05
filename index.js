const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

var cors = require('cors');
const logger = require('./logger');
const { port } = require('./config');
const { routes } = require('./routers');

const log = logger.getLogger('index.js');
const app = express();

app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    log.info(`servidor en puerto ${port}`);
}) 