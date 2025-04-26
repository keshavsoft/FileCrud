import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../controllers/EntryFile.js';

router.get('/:FileName', GetFunc);

export { router };