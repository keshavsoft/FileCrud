const PostFunc = (req, res, next) => {
    const body = req.body;

    if (!Array.isArray(body)) {
        return res.status(400).send("Request body must be an array.");
    }

    if (body.length === 0) {
        return res.status(400).send("Array should not be empty.");
    }

    const onlyEmptyObjects = body.every(
        item => typeof item === 'object' && item !== null && Object.keys(item).length === 0
    );

    if (onlyEmptyObjects) {
        return res.status(400).send("Array should not contain only empty objects.");
    }

    next();
};

export { PostFunc };
