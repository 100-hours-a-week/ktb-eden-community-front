import { add, subtract } from './operations.js';
import {User} from './userProfile.js';

console.log(add(10,5));
console.log(subtract(10,5));
console.log(subtract(5,10));
const eden = new User("eden", 27);
eden.greet();