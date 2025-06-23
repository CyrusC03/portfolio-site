//step2
const Employee1 = {name:"Bob Reed", hourlyRate: 10.00, hoursWorked: 20};
const Employee2 = {name:"Dave Port", hourlyRate: 20.00, hoursWorked: 40};
const Employee3 = {name:"Lee ", hourlyRate: 25.00, hoursWorked: 50};
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
    var overtimeHours;
    if(hours>40)
    overtimeHours=hours-40; 
    else
    overtimeHours=0;
    return
    (overtimeHours*rate*1.5);
}
console.log("step 4 completed");
//step 5
calculateTaxes(grossPay) {
    return(grosspay*0.15);
}
console.log("step 5 completed");
//step 6
