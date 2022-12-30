const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
// model e mon ro iijad mikonim (tebgh e in model collection ijad kon)
const userModel = model("user", userSchema);
module.exports = {
  userModel,
};
