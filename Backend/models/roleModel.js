const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  roleName: { type: String, required: true },
  storeName: { type: String, required: true },
  description: { type: String },
  permissions: [
    {
      module: String,
      actions: [String],
    },
  ],
});

const Role = mongoose.model("Role", RoleSchema);
module.exports = Role;
