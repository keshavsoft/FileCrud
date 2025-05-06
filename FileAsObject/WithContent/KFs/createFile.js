import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
import { Console } from "console";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName, inInsertData }) => {
    const LocalFileName = inFileName;
    let LocalInsertData = inInsertData;
    let LocalReturnData = { KTF: false };
    const LocalDataPath = StartFuncCommonExpose();

    try {
        fs.writeFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, JSON.stringify(LocalInsertData), { flag: 'wx' });

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = `${LocalFileName}.json File Created Successfully in ${CommonDataPath} folder`;

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
