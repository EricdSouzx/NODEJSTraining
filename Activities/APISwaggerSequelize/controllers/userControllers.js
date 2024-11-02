const User = require("../models/user");

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    console.log("User created:", user.toJSON());
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    console.log("All users:", JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const updateUser = async (id, updatedData) => {
  try {
    const result = await User.update(updatedData, { where: { id } });
    if (result[0] === 1) {
      console.log("User updated successfully.");
    } else {
      console.log("User not found or no update needed.");
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

const deleteUser = async (id) => {
  try {
    const result = await User.destroy({ where: { id } });
    if (result === 1) {
      console.log("User deleted successfully.");
    } else {
      console.log("User not found.");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

module.exports = { createUser, getAllUsers, updateUser, deleteUser };
