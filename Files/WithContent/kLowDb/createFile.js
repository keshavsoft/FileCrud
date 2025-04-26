import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName, inName, inMobile }) => {
    const LocalFileName = inFileName;
    let LocalName = inName;
    let LocalMobile = inMobile;

    let ObjectData = { Name: LocalName, Mobile: LocalMobile };
    console.log(ObjectData);

    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };

    try {
        fs.writeFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, JSON.stringify(ObjectData), { flag: 'wx' });

        LocalReturnData.KTF = true;
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
