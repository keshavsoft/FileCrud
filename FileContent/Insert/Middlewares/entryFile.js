const StartFunc = (req, res, next) => {
    const { Key: LocalKey, Value: LocalValue } = req.body;

    if (!LocalKey || !LocalValue) {
        return res.status(404).end(
            "Post request body should not be empty."
        );
    }

    next();
};

export { StartFunc };
