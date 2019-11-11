import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'NEW_NAME', age: 999});
user.save();