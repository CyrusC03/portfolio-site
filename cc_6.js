//step2
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
//step 4

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
//step 4

const employee1 = new Employee("John Doe", "Information Technology");
const employee2 = new Employee("Jane Sioth", "Accounts payable");
const employee3 = new Employee("Bob Dylan", "Operations");
const manager 1 = new Manager("Cyrus Chinoy", "Operations", 3);