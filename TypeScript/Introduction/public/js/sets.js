"use strict";
let names = [
    'Bob',
    'Alice',
    'Alice',
    'Bob',
    'Vardas',
    'Pavardas',
    'Vardas',
];
let uniqueNames = new Set(names);
const user1 = { email: 'laiskaslaiskauskas@gmail.com', score: 20 };
const user2 = { email: 'pastaspastauskas@gmail.com', score: 20 };
const users = new Set();
users.add(user1);
users.add(user2);
users.add(user1);
console.log(users);
function logUserDetails(users) {
    users.forEach((user) => {
        console.log(user);
    });
}
logUserDetails(users);
//# sourceMappingURL=sets.js.map