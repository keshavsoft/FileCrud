import express from 'express';

var router = express.Router();

import { router as routerDeleteFuncs } from './Routes/entryFile.js';

router.use('/', routerDeleteFuncs);

export { router };