//Step 2
const person1={name:"John Doe", email:"jdoe@ezstart.com", purchases:["laptop","monitor","keyboard"]};
const person2={name:"Jane Smith", email:"jsmith@ezstart.com", purchases:["tablet","stylus"]};
const person3={name:"Mike Banning", email:"mbanning@ezstart.com", purchases:["iphone","airpods"]};
let customers=[person1, person2, person3];
//Step 3
const person4={name:"Bob Dylan", email:"bdylan@ezstart.com",purchases:["TV","DVD player","HDMI Cable"]};
customers.push(person4);
//log 4th person added
console.log(customers[3].name);
customers.shift(person1);
console.log("customers element 0 "+ customers[0].name);
//Step 4 
person3.email="mikeb@ezstart.com";
console.log("person3 new email:"+ person3.email);
person3.purchases.push("Apple Watch");
console.log("person3 new purchase:"+person3.purchases[2]);
//Step 5
for (let i = 0; i < customers.length; i++) {
  var customer=customers[i];
  console.log(`Customer name:${customer.name}`);
  console.log(`Customer email:${customer.email}`);
  console.log(`Customer purchase count:${customer.purchases.length}`);
}