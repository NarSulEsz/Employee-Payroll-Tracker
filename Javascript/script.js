// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
      // TODO: Get user input to create and return an array of employee objects

      const employees = []; // Created array named "employees" to collect data of employees
  
     // This while loop asks user to fill another employee
     while (true) {
      const firstName = prompt("Enter First Name:"); 
      const lastName = prompt("Enter Last Name:"); 
      let salary = prompt("Enter Salary:");
      
          
      // This push statement adds another employee to the array
      employees.push({
        firstName: firstName,
        lastName: lastName,
        salary: salary,
      });
  
      // This conditional statement asks if the user wants to add another employee. If not, break
      const continueAdding = confirm("Do you want to add another employee?");
      if (!continueAdding) {
        break; 
      }
    }
    return employees; // Display the list of employees
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
// Calculate the total salary
let totalSalary = 0;
  
for (let i = 0; i < employeesArray.length; i++) {
  totalSalary += parseFloat(employeesArray[i].salary) || 0; // Ensure salary is a number
}

// Calculate the average salary
const averageSalary = totalSalary / employeesArray.length;

// Log the average salary and number of employees
console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
})}`);
console.log(`Number of Employees: ${employeesArray.length}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // Check if there are employees in the array
  if (employeesArray.length === 0) {
    console.log("No employees found.");
    return;
  }

  // Generate a random index based on the array length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Select the random employee
  const randomEmployee = employeesArray[randomIndex];

  // Display the random employee's details
  console.log("Randomly Selected Employee:");
  console.log("First Name: " + randomEmployee.firstName);
  console.log("Last Name: " + randomEmployee.lastName);
  console.log("Salary: " + randomEmployee.salary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  }));
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
