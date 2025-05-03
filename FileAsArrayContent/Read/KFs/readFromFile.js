import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };
    let filePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;
    try {
        
        if (!fs.existsSync(filePath)) {
            LocalReturnData.KReason = `${LocalFileName} File does not exist in Data Folder .`;
            console.warn(LocalReturnData.KReason);
            return LocalReturnData;
        }
        
        const data = fs.readFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, 'utf8');
        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = data;
    } catch (err) {
        LocalReturnData.KReason = `Error reading ${LocalFileName} file .`;
        console.warn(LocalReturnData.KReason);
        return LocalReturnData;
    };

    return LocalReturnData;
};

export { StartFunc };
