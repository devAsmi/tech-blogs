const { User } = require("../models");

const userData = [
  {
    id: 1,
    user_name: "asmita",
    password: "aaaasddddd",
  },
  {
    id: 2,
    user_name: "jose",
    password: "aaaeeddddd",
  },
  {
    id: 3,
    user_name: "sam",
    password: "aaaeeddddd",
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
