//set - rinkinys kuriame yra unikalios vertes, be indexu

let names: string[] = [
  'Bob',
  'Alice',
  'Alice',
  'Bob',
  'Vardas',
  'Pavardas',
  'Vardas',
];

let uniqueNames = new Set<string>(names);

interface user {
  email: string;
  score: number;
}

const user1: user = { email: 'laiskaslaiskauskas@gmail.com', score: 20 };
const user2: user = { email: 'pastaspastauskas@gmail.com', score: 20 };

const users = new Set<user>();

//nors ir pridedam belenkiek useriu, vis tiek prisideda tik vienas unikalus elementas
users.add(user1);
users.add(user2);
users.add(user1);

console.log(users);

//sets funkcijose
function logUserDetails(users: Set<user>): void {
  users.forEach((user) => {
    console.log(user);
  });
}

logUserDetails(users);
