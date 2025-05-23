import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = async (req, res) => {
    let LocalParam = req.params.FileName;
    let LocalRequestBody = req.body;
    let LocalKey = LocalRequestBody.Key;

    let LocalFromRepo = await postDefaultFuncFromRepo({ inKey: LocalKey, inFileName: LocalParam });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).json(LocalFromRepo.JsonData);
};

export {
    postFilterDataFromBodyFunc
};