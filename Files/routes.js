import express from 'express';
const router = express.Router();

import { router as routerFromCreate } from "./Create/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromRead} from "./Read/routes.js";

router.use("/Create", routerFromCreate);
router.use("/Delete", routerFromDelete);
router.use("/Read", routerFromRead);

export {
    router
};