import {
    PostFunc as PostFuncRepo
} from '../Repos/entryFile.js';

let PostFunc = (req, res) => {
    const LocalFileName = req.params.FileName;
    const LocalBody = req.body;
    const LocalName = LocalBody.Name;
    const LocalMobile = LocalBody.Mobile;

    let LocalFromRepo = PostFuncRepo({ inFileName: LocalFileName, inName: LocalName, inMobile: LocalMobile });
console.log("LocalFromRepo:",LocalFromRepo);

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.status(200).end();
};

export {
    PostFunc
};