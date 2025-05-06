import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";

const CommonDataPath = "Data";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();
    const FullFilePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;

    let LocalReturnData = { KTF: false };

    if (fs.existsSync(FullFilePath)) {
        try {
            const data = fs.readFileSync(FullFilePath, 'utf8');
            LocalReturnData.KTF = true;
            LocalReturnData.JsonData = data;
        } catch (err) {
            console.warn(`Error reading ${LocalFileName} file: ${err}`);
            LocalReturnData.KReason = `Error reading ${LocalFileName} file: ${err}`;
        }
    } else {
        LocalReturnData.KReason = `${LocalFileName}.json file doesn't exist in ${CommonDataPath} folder.`;
        console.warn(LocalReturnData.KReason);
    }

    return LocalReturnData;
};

export { StartFunc };
