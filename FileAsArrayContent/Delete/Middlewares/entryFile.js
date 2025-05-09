const StartFunc = (req, res, next) => {
    const { Key: LocalKey } = req.body;  

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    }

    if (Array.isArray(req.body)) {
        return res.status(400).send("Remove the array from the body.");
    }

    if (typeof req.body === 'object' && Object.keys(req.body).length === 0) {
        return res.status(400).send("Request body should not be an empty object.");
    }

    next();
};

export { StartFunc };
