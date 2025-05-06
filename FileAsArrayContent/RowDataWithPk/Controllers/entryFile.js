import {
    GetFunc as GetFuncRepo
} from '../Repos/entryFile.js';

let GetFunc = (req, res) => {
    const LocalFileName = req.params.FileName;
    const LocalId = req.params.id;

    let LocalFromRepo = GetFuncRepo({ inFileName: LocalFileName, inId: LocalId });

    if (LocalFromRepo.KTF === false) {
        res.status(404).send(LocalFromRepo.KReason);

        return;
    };

    res.status(200).send(LocalFromRepo.JsonData);
};

export {
    GetFunc
};