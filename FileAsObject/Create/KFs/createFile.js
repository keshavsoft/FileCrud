import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName }) => {
    const LocalFileName = inFileName;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };

    try {
        fs.writeFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, JSON.stringify({}), { flag: 'wx' });
        LocalReturnData.KTF = true;
        LocalReturnData.KReason = `${LocalFileName}.json created successfully in ${CommonDataPath} folder.`;
    } catch (err) {
        if (err.code === 'EEXIST') {
            LocalReturnData.KReason = `${LocalFileName}.json File already exists in ${CommonDataPath} folder.`;
            return LocalReturnData;

        } else {
            console.error('Error creating file:', err);
            LocalReturnData.KReason = err;
            return LocalReturnData;
        };
    };

    return LocalReturnData;
};

export { StartFunc };
