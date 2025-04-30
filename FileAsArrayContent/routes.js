import express from 'express';
const router = express.Router();

import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromInsert } from "./Insert/routes.js";
import { router as routerFromRead } from "./Read/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromInsertWithUuId } from "./InsertWithUuId/routes.js";
import { router as routerFromInsertWithPkAndUuId } from "./InsertWithPkAndUuId/routes.js";

router.use("/Alter", routerFromAlter);
router.use("/Insert", routerFromInsert);
router.use("/Read", routerFromRead);
router.use("/Delete", routerFromDelete);
router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/InsertWithUuId", routerFromInsertWithUuId);
router.use("/InsertWithPkAndUuId", routerFromInsertWithPkAndUuId);

export {
    router
};