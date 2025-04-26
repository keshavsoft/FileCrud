import {
    PostFunc as PostFuncDal
} from '../dals/entryFile.js';

let PostFunc = ({ inFileName, inName, inMobile }) => {
    return PostFuncDal({ inFileName, inName, inMobile });
};

export {
    PostFunc
};