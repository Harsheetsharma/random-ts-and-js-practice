"use strict";
// console.log("A");
const u = {
    name: "John"
};
let u2 = u;
u2.name = "Doe";
u2 = { name: "New" };
console.log(u.name);
console.log(u2.name);
