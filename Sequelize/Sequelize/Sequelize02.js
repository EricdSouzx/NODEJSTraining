import Sequelize, { INTEGER, STRING } from "sequelize";

let sequelize = new Sequelize("mydb3", "root", "root", {
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

const aluno = sequelize.define("student", {
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

sequelize.sync({
  force: true,
});

aluno
  .create({
    firstname: "John",
    lastname: "Smith",
    age: 26,
    email: "j.smith@example.com",
  })
  .then((student) => {
    // Send created user to client
    return student.Id;
  })
  .catch(function (err) {
    console.log("create failed with error: " + err);
    return 0;
  });

aluno
  .findAll()
  .then((student) => {
    console.log(user);
  })
  .catch(function (err) {
    console.log("findAll failed with error: " + err);
    return null;
  });

aluno
  .update({ firstname: "j", lastname: "smith", age: 27 }, { where: { id: 2 } })
  .then(() => {
    console.log(id);
  })
  .catch(function (err) {
    console.log("update failed with error: " + err);
    return 0;
  });
