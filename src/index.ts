import { User } from './models/User';

const user = new User({ name: "newname", age: 999 });

user.on('change', () => {});
user.on('change', () => {});

console.log(user);