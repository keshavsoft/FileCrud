import express from 'express';
const router = express.Router();

import { router as routerFromCreate } from "./Create/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";

router.use("/Create", routerFromCreate);
router.use("/Delete", routerFromDelete);

export {
    router
};