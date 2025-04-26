import { StartFunc as ReadFromFile } from '../KFs/createFile.js';

let PostFunc = ({ inFileName, inName, inMobile }) => {
    let LocalFromLowDb = ReadFromFile({ inFileName, inName, inMobile });

    return LocalFromLowDb;
};

export {
    PostFunc
};