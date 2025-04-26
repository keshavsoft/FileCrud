import express from 'express';

var router = express.Router();

import {
    PostFunc
} from '../controllers/entryFile.js';

router.post('/:FileName', PostFunc);

export { router };