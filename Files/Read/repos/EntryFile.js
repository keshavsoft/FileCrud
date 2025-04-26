import {
    GetFunc as GetFuncDal
} from '../dals/EntryFile.js';

let GetFunc = ({ inFileName }) => {
    return GetFuncDal({ inFileName });
};

export {
    GetFunc
};