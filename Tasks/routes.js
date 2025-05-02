import express from 'express';
const router = express.Router();

import { router as routerFromCreate} from "./Insert/routes.js";
import { router as routerFromRead} from "./Read/routes.js";
import { router as routerFromAlter} from "./Alter/routes.js";
import { router as routerFromDelete} from "./Delete/routes.js";

router.use("/Insert", routerFromCreate);
router.use("/Read", routerFromRead);
router.use("/Alter", routerFromAlter);
router.use("/Delete", routerFromDelete);

export {
    router
};