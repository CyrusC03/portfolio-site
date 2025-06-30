//step 2
class Employee {
  constructor(name, department) {
     // Initialize properties here
            this.name=name;
            this.department=department; 
        }
// Define methods here
   describe() {
     // Method code
             console.log(`Hello, my name is ${this.name} and I am from ${this.department} department.`);
   }
}
console.log("step 2 completed");

//step 3
class Manager extends Employee {
    constructor(name, department, teamSize) {
        // Initialize properties here

        super(name,department);

        this.teamSize=teamSize;
    }
    // Define methods here
    describe() {
        // Method code

         console.log(`Hello, my name is ${this.name} and I am from ${this.department} department. My team's size is ${this.teamSize}`);
    }
}
console.log("step 3 completed");

//step 4
const employee1 = new Employee("John Doe", "Information Technology");
const employee2 = new Employee("Jane Smith", "Accounts payable");
const employee3 = new Employee("Bob Dylan", "Operations");
const employee4 = new Employee("Mike Banning", "Operations");
const employee5 = new Employee("Matthew Bradley", "Information Technology");
const employee6 = new Employee("Liam Niko", "Information Technology");
const manager1 = new Manager("Cyrus Chinoy", "Operations", 3);
const manager2 = new Manager("Bradley Davis", "Information Technology");

console.log("step 4 completed");

//step 5

class Company {
    constructor(employees) {
        // Initialize properties here

         if (!Array.isArray(employees)) {
            throw new Error("Constructor expects an array as an argument.");
         }

        this.employees=employees;
    }
    // Define methods here
    addEmployee(employee) {
        // Method code
        this.employees.push(employee);
    }
    listEmployees() {
      let len = this.employees.length;
      for (let i = 0; i < len; i++) { 
         employees[i].describe(); }
    }
}

console.log("step 6 completed");

//step 6

let employees=[Employee1,Employee2,Employee3];


