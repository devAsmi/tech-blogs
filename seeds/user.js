const { User } = require("../models");

const userData = [
  {
    id: 1,
    user_name: "asmita",
    password: "aaaasddddd",
    email: "asmi@aol.com",
  },
  {
    id: 2,
    user_name: "jose",
    password: "aaaeeddddd",
    email: "jose@aol.com",
  },
  {
    id: 3,
    user_name: "sam",
    password: "aaaeeddddd",
    email: "sam@aol.com",
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
