const PostFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || Array.isArray(LocalBody) === false) {
        return res.status(404).end(
            "Post request body should not be empty."
        );
    }

    next();
};

export { PostFunc };
