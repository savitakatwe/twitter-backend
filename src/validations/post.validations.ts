import Joi from "joi";

export const createPostSchema = Joi.object({
  message: Joi.string().required(),
});
