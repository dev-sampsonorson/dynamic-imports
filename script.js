import { default as User, printUser } from "./user.js";


/* const user = new User("John", "Doe");
printUser(user); */

setTimeout(() => {
    import('./user.js').then(({ default: User, printUser }) => {
        const user = new User("John", "Doe");
        printUser(user);
    });
}, 5000);