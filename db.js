const Sequelize = require('sequelize');
//connect to db
const db = new Sequelize("db","username","pass",{
  dialect: "",
  host: ""
});

//make table
const table = db.define({
  attr: "prop"
})


module.exports = table;
