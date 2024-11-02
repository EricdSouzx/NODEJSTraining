import Sequelize, { INTEGER, STRING } from "sequelize";

let sequelize = new Sequelize("mydb2", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const user = sequelize.define("user", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: STRING,
  },
  lastname: {
    type: STRING,
  },
  age: {
    type: INTEGER,
  },
  email: {
    type: STRING,
  },
});

// Gerando a tabela a partir do modelo
sequelize.sync({
  force: true,
});

user
  .create({
    firstname: "John",
    lastname: "Smith",
    age: 26,
    email: "j.smith@example.com",
  })
  .then((user) => {
    // Send created user to client
    return user.userId;
  })
  .catch(function (err) {
    console.log("create failed with error: " + err);
    return 0;
  });

user
  .findAll()
  .then((users) => {
    console.log(user);
  })
  .catch(function (err) {
    console.log("findAll failed with error: " + err);
    return null;
  });

user
  .update({ firstname: "j", lastname: "smith", age: 27 }, { where: { id: 2 } })
  .then(() => {
    console.log(id);
  })
  .catch(function (err) {
    console.log("update failed with error: " + err);
    return 0;
  });

user
  .findById(id)
  .then((user) => {
    console.log(user);
  })
  .catch(function (err) {
    console.log("findById failed with error: " + err);
    return null;
  });

user
  .destroy({
    where: { id: id },
  })
  .then(() => {
    console.log("deleted record with id", id);
  })
  .catch(function (err) {
    console.log("delete failed with error: " + err);
    return 0;
    // handle error;
  });
