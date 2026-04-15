"use strict";
// console.log("A");
function updateUser(user) {
    user = { name: "New Name" };
}
const u = { name: "Old Name" };
updateUser(u);
console.log(u.name);
