const StartFunc = (req, res, next) => {
    const { Key: LocalKey } = req.body;

    if (!LocalKey) {
        return res.status(409).send("Delete request body should not be empty.");
    }

    next();
};

export { StartFunc };
