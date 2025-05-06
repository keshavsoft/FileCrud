import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inFileName, inId }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inFileName, inId });

    return LocalFromLowDb;
};

export {
    GetFunc
};