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
            fs.unlinkSync(filePath);
            LocalReturnData.KTF = true;
            console.log(`${LocalFileName}.json has been successfully deleted in ${CommonDataPath} folder.`);
            LocalReturnData.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
        } catch (err) {
            LocalReturnData.KReason = err.message;
            console.error(`Error deleting ${LocalFileName}.json:`, err.message);
        };
    } else {
        LocalReturnData.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;

        console.warn(LocalReturnData.KReason);
    };

    return LocalReturnData;
};

export { StartFunc };
