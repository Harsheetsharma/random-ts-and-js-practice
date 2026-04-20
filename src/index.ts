// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => {
//     console.log("C");
//     Promise.resolve().then(() => {
//         console.log("Harshit");
//     });
//     setTimeout(() => { console.log("D") }, 0);
// })

// Promise.resolve().then(() => {
//     console.log("E");
// })

// console.log("F");


// setTimeout(() => console.log("T1"), 0);

// Promise.resolve().then(() => {
//     console.log("P1");
//     setTimeout(() => console.log("T2"), 0);
// });

// Promise.resolve().then(() => {
//     console.log("P2");
// });

// setTimeout(() => console.log("T3"), 0);

// console.log("start");

// setTimeout(() => console.log("timeout1"), 0);

// Promise.resolve().then(() => {
//     console.log("promise1");

//     queueMicrotask(() => {
//         console.log("microtask1");
//     });

//     Promise.resolve().then(() => {
//         console.log("promise2");
//     });
// });

// setTimeout(() => console.log("timeout2"), 0);

// console.log("end");

// expected output : start,end, promise1,promise2,microtask1,timeout1,timeout2
// actula output : start,end, promise1,microtask1,promise2,timeout1,timeout2

// Can excessive use of microtasks (Promises / queueMicrotask) block the event loop?

// function loop() {
//     Promise.resolve().then(loop);
// }
// loop();

// setTimeout(() => { console.log('running this end ') }, 0);


// console.log("A");
// the nextTick is higher priority microtask queue
// process.nextTick(() => console.log("B"));

// Promise.resolve().then(() => {
//     console.log("C");
//     process.nextTick(() => console.log("D"));
// });

// Promise.resolve().then(() => console.log("E"));

// console.log("F");

// type A = {
//     name: string;
// };

// type B = {
//     name?: string;
// };

// let obj: A = { name: "John" };
// let obj2: B = obj;

// obj2.name = undefined;

// console.log(obj.name);

// type B = {
//     name?: string;
// };

// let obj: B = {};

// obj.name = undefined;

// // console.log(obj.name ? "undefined" : "hello");
// console.log(obj.name);

// type User = {
//     name: string;
// };

// function updateUser(user: User) {
//     user = { name: "New Name" };
// }

// const u = { name: "Old Name" };

// updateUser(u);

// console.log(u.name);

// type User = {
//     name: string;
// };

// const u: User = {
//     name: "John"
// };

// let u2 = u;

// u2.name = "Doe";

// u2 = { name: "New" };

// console.log(u.name); //output = doe
// console.log(u2.name); // output = new
// // why because in ts and js donig this let u2 = u; deos not clone , it creates a reference of u2 to same object that u has
// // so any change to u2 will reflect in u

