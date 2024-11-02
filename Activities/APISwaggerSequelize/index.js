const { connectDB } = require("./config/db");
const User = require("./models/user");
const { createUser, getAllUsers, updateUser, deleteUser } = require("./controllers/userControllers");

const runCRUDOperations = async () => {
  await connectDB();
  await User.sync({ force: true }); 

  await createUser({
    firstname: "John",
    lastname: "Doe",
    age: 28,
    email: "johndoe@example.com",
  });

  await createUser({
    firstname: "Jane",
    lastname: "Smith",
    age: 32,
    email: "janesmith@example.com",
  });

  await getAllUsers();

  await updateUser(1, {
    firstname: "Johnathan",
    age: 29,
  });

  await deleteUser(2);

  await getAllUsers();
};

runCRUDOperations();
