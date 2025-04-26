import express from 'express';
const app = express()
const port = 3000;
import bodyparser from "body-parser";
import { router as routerFromTasks } from "./Tasks/routes.js";
import { router as routerFromFiles } from "./Files/routes.js";
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/Tasks', routerFromTasks);
app.use('/Files', routerFromFiles);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});