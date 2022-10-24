const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const port = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "local",
    user: "root",
    password: "",
    database: "employeemanagement_db",
  },
  console.log("Connected to the employeemanagement_db database")
);
function start() {
  inquirer.prompt([
    {
      message: "What would you like to do today?",
      type: "list",
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee",
      ],
    },
  ]);
}
start();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
