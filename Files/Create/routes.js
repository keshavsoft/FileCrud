import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './Routes/EntryFile.js';

router.use('/', routergetFuncs);

export { router };