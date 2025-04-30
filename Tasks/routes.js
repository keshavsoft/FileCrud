import express from 'express';
const router = express.Router();

import { router as routerFromCreate} from "./Insert/routes.js";
import { router as routerFromRead} from "./Read/routes.js";

router.use("/Insert", routerFromCreate);
router.use("/Read", routerFromRead);

export {
    router
};