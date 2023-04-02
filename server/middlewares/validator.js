const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check(`name`, `This field is required!`).notEmpty(),
  check(`email`, `This should be a valid email!`).isEmail(),
  check(`email`, `This should be a valid email!`).notEmpty(),
  check(`password`, `this field should be at last 4 char!`).isLength({
    min: 4,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
