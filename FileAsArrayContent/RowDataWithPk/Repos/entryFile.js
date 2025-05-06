import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inFileName, inId }) => {
    return GetFuncDal({ inFileName, inId });
};

export {
    GetFunc
};