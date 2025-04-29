import {
    postDefaultFunc as postDefaultFuncFromDal,
} from '../Dals/entryFile.js';

let postDefaultFunc = async ({ inKey, inFileName }) => {
    return postDefaultFuncFromDal({ inKey, inFileName });
};

export {
    postDefaultFunc
};