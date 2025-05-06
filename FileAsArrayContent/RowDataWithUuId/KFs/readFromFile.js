import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName, inId }) => {
    const LocalFileName = inFileName;
    const LocalId = inId;
    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };

    try {
        const data = fs.readFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, 'utf8');

        let LocalFind = JSON.parse(data).find(el => el.UuId === LocalId);
        if (!LocalFind) {
            LocalReturnData.KReason = `No Data Found ${LocalId}`;
            return LocalReturnData;
        };

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = LocalFind;

        return LocalReturnData;
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('File already exists.');
        } else {
            console.error('Error creating file:', err);
        }
    };

    return LocalReturnData;
};

export { StartFunc };
