const PostFunc = (req, res, next) => {
    const body = req.body;

    if (
        !body || typeof body !== 'object' || Array.isArray(body) || Object.keys(body).length === 0
    ) {
        return res.status(400).send("Post request body should be a non-empty object.");
    }

    next();
};

export { PostFunc };
