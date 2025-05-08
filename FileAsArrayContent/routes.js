import express from 'express';
const router = express.Router();

import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromInsert } from "./Insert/routes.js";
import { router as routerFromRead } from "./Read/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromInsertWithUuId } from "./InsertWithUuId/routes.js";
import { router as routerFromInsertWithPkAndUuId } from "./InsertWithPkAndUuId/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromRowDataWithUuId } from "./RowDataWithUuId/routes.js";
import { router as routerFromInsertWithPkAndUuIdAndDateTime } from "./InsertWithPkAndUuIdAndDateTime/routes.js";
import { router as AlterWithPk } from "./AlterWithPk/routes.js";

router.use("/Alter", routerFromAlter);
router.use("/Insert", routerFromInsert);
router.use("/Read", routerFromRead);
router.use("/Delete", routerFromDelete);
router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/InsertWithUuId", routerFromInsertWithUuId);
router.use("/InsertWithPkAndUuId", routerFromInsertWithPkAndUuId);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/RowDataWithUuId", routerFromRowDataWithUuId);
router.use("/InsertWithPkAndUuIdAndDateTime", routerFromInsertWithPkAndUuIdAndDateTime);
router.use("/AlterWithPk", AlterWithPk);

export {
    router
};