import { default as User, printUser } from "./user.js";

const user = new User("John", "Doe");

printUser(user);


import('./user.js').then(({ default: User, printUser }) => {
    console.log(module);
});