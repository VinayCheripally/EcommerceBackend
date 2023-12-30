const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  const doc = this;
  if (!doc.userId) {
    const maxUserId = await mongoose
      .model("user")
      .find()
      .sort({ userId: -1 })
      .limit(1);
    doc.userId = maxUserId.length === 0 ? 1 : maxUserId[0].userId + 1;
  }
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
