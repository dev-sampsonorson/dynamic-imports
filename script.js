import User, { printUser } from "./user.js";

const user = new User("John", "Doe");

printUser(user);


import('./user.js').then(module => {
    console.log(module);
});