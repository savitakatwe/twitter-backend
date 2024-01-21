import Joi from "joi";

export const loginSchema = Joi.object({
  textId: Joi.string().required(),
  password: Joi.string().required(),
});
export const signUpSchema = Joi.object({
  name: Joi.string().required(),
  textId: Joi.string().required(),
  password: Joi.string().required(),
});
