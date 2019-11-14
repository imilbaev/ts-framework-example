import { User } from './models/User';

const user = new User({ name: "test", age: 90 });

console.log(user.get('name'));

user.on('change', () => {
  console.log("U");
})

user.set({age: 1});