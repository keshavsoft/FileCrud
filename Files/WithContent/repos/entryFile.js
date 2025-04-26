import {
    PostFunc as PostFuncDal
} from '../Dals/entryFile.js';

let PostFunc = ({ inFileName, inName, inMobile }) => {
    return PostFuncDal({ inFileName, inName, inMobile });
};

export {
    PostFunc
};