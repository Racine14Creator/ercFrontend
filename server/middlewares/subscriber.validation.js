import Joi from "joi";

export const validation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string()
    });

    const { error } = schema.validate({ email: req.body.email });
    if (error) {
        return res.status(400).json({ error: "Invalid Email" });
    }

    next();
};

