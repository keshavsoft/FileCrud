import express from 'express';
const router = express.Router();

import { router as routerFromCreate } from "./Create/routes.js";

router.use("/Create", routerFromCreate);;

export {
    router
};