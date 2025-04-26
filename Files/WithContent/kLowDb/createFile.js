import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

let StartFunc = ({ inFileName, inName, inMobile }) => {
console.log("naaaa");
    
    const LocalFileName = inFileName;
    let LocalName = inName;
    let LocalMobile = inMobile;
    console.log(LocalFileName,LocalName,LocalMobile);
    
    let ObjectData = { LocalName: LocalName, LocalMobile: LocalMobile };
    console.log(ObjectData);

    const LocalDataPath = StartFuncCommonExpose();

    let LocalReturnData = { KTF: false };

    try {
        fs.writeFileSync(`${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`, JSON.stringify({}), { flag: 'wx' });

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
