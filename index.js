const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employeemanagement_db",
  },
  console.log("Connected to the employeemanagement_db database")
);

const inquirer = require("inquirer");
start();
function start() {
  inquirer
    .prompt([
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
        name: "options",
      },
    ])
    .then((options) => {
      switch (options.options) {
        case "View Departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee":
          updateEmployee();
          break;
      }
    });
}
const addDepartment = () => {
  console.log("Adding a Deparment");
  inquirer
    .prompt([
      {
        message: "What is the department name",
        type: "input",
        name: "names",
      },
    ])
    .then((department) => {
      db.query("INSERT INTO departments SET ?", department, (err) => {
        if (err) {
          console.log(err);
        }
      });
      start();
    });
};

const addRole = () => {
  console.log("Adding a Role");
  inquirer
    .prompt([
      {
        message: "What is the role name",
        type: "input",
        name: "title",
      },
      {
        message: "What is the salary for the role",
        type: "input",
        name: "salary",
      },
      {
        message: "What is the ID of the department this role belongs to",
        type: "input",
        name: "department_id",
      },
    ])
    .then((role) => {
      db.query("INSERT INTO roles SET ?", role, (err) => {
        if (err) {
          console.log(err);
        }
      });
      start();
    });
};

const addEmployee = () => {
  console.log("Adding a Role");
  inquirer
    .prompt([
      {
        message: "What is the employee's first name",
        type: "input",
        name: "first_name",
      },
      {
        message: "What is the employee's last name",
        type: "input",
        name: "last_name",
      },
      {
        message: "What is the Role ID for this employee",
        type: "input",
        name: "role_id",
      },
    ])
    .then((employee) => {
      db.query("INSERT INTO employees SET ?", employee, (err) => {
        if (err) {
          console.log(err);
        }
      });
      start();
    });
};

const viewDepartments = () => {
  db.query("SELECT * FROM departments", (err, departments) => {
    if (err) {
      console.log(err);
    }
    console.table(departments);
    start();
  });
};

const viewRoles = () => {
  db.query("SELECT * FROM roles", (err, roles) => {
    if (err) {
      console.log(err);
    }
    console.table(roles);
    start();
  });
};

const viewEmployees = () => {
  db.query("SELECT * FROM employees", (err, employees) => {
    if (err) {
      console.log(err);
    }
    console.table(employees);
    start();
  });
};

const updateEmployee = () => {
  inquirer
    .prompt([
      { message: "ID for the Employee to update", type: "input", name: "id" },
      {
        message: "What Role is the Employee being updated to",
        type: "input",
        name: "role_id",
      },
    ])
    .then((update) => {
      var updateRole = {
        role_id: update.role_id,
      };
      db.query(
        `UPDATE employees SET ? WHERE id = ${update.id}`,
        updateRole,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      console.log(`Employee Role update`);
      start();
    });
};
