import Joi from "joi";

export const followSchema = Joi.object({
  followUserId: Joi.string().required(),
});
