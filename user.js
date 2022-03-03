export default class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export function printUser(user) {
    console.log(`${user.firstName} ${user.lastName}`);
}