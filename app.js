import express from 'express';
import path from "path";

const app = express()
const port = 3000;
import bodyparser from "body-parser";
import { router as routerFromTasks } from "./Tasks/routes.js";
import { router as routerFromFiles } from "./FileAsObject/routes.js";
import { router as routerFileContent } from "./FileContent/routes.js";
import { router as routerFileAsArray } from "./FileAsArray/routes.js";
import { router as routerFileAsArrayContent } from "./FileAsArrayContent/routes.js";

app.use('/', express.static(path.join(path.resolve(), 'public')));

app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/Tasks', routerFromTasks);
app.use('/FileAsObject', routerFromFiles);
app.use('/FileContent', routerFileContent);
app.use('/FileAsArray', routerFileAsArray);
app.use('/FileAsArrayContent', routerFileAsArrayContent);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`Click to Open http://localhost:${port}`)
});