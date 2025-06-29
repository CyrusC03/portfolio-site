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
Vinita Chinoy
	
Jun 26, 2025, 11:44 PM (3 days ago)
	
to me
ok now we work on step3.
Create a subclass called manager.
Manager is a type of Employee so we put extends Employee when defining this class.
Manager will have a name, department and teamSize. 
So we will use the parent class constructor by using the super() method in constructor and add teamSize attribute.
We have been asked to define describe method for Manager. What that means is if we define this method in Manager, it will override what is in the parent class Employee. Which is ok.

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