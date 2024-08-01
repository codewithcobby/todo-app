import Joi from "joi"

export const validate = (validator: (data: {}) => Joi.ValidationResult<any>, body: {}) => {
  const { error } = validator(body)
  if (error) return { message: error.details[0].message }
}
