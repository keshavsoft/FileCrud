import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };
    const filePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;

    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(`${filePath}`, 'utf8');

            LocalReturnData.KTF = true;
            LocalReturnData.JsonData = data;
        } catch (err) {
            if (err.code === 'EEXIST') {
                console.log('File already exists.');
            } else {
                console.error('Error creating file:', err);
            }
        };
    } else {
        LocalReturnData.KReason = `No File ${LocalFileName}.`

        console.warn(LocalReturnData.KReason);
    };

    return LocalReturnData;
};

export { StartFunc };
