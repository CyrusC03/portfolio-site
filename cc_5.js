//step2
const Employee1 = {name:"Bob Reed", hourlyRate: 10.00, hoursWorked: 20};
const Employee2 = {name:"Dave Port", hourlyRate: 20.00, hoursWorked: 40};
const Employee3 = {name:"John Lee", hourlyRate: 25.00, hoursWorked: 50};
const Employee4 = {name:"Kim Johnson", hourlyRate: 15.00, hoursWorked: 25};
let employees=[Employee1,Employee2,Employee3,Employee4];
console.log("step 2 completed");
//step 3
function calculateBasePay(rate, hours){
    var weekHours;
    if(hours>=40)
    weekHours=40;
    else
    weekHours=hours;
    return (weekHours*rate);
}
console.log("step 3 completed");
//step4
function calculateOvertimePay(rate, hours){
    var overtimeHours = 0;
    if(hours>40)
    overtimeHours=hours-40; 
    return(overtimeHours*rate*1.5);
}
console.log("step 4 completed");
//step 5
function calculateTaxes(grossPay) {
    return(grossPay*0.15);
}
console.log("step 5 completed");
//step 6
function processPayroll(employee) {
    var employeePay = {name: "", basePay: 0, overtimePay: 0, grossPay: 0, netPay:0};
    employeePay.name=employee.name
    employeePay.basePay=calculateBasePay(employee.hourlyRate,employee.hoursWorked);
    employeePay.overtimePay=calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    var grossPay=employeePay.basePay+employeePay.overtimePay;
    employeePay.grossPay=grossPay;
    employeePay.netPay=grossPay-calculateTaxes(grossPay);
    return employeePay;
}
console.log("step 6 completed");
//step 7
console.log("");
for(let employee of employees) {
    for(let [index,item] of Object.entries(employee)) {
    const payroll=processPayroll(employee);
        for(let [count,nItem] of Object.entries(payroll)) {
        console.log(`${count}:${nItem}`);
        }
    }
}
console.log("step 7 completed");